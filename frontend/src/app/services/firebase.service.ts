import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FirebaseService {
  auth: AngularFirestore;
  onLogged = new BehaviorSubject<boolean>(false);
  constructor(
    private angularFireStore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    private angularFireStorage: AngularFireStorage,
    private router: Router
  ) {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        this.onLogged.next(true);
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('userEmail', user.email);
      } else {
        this.onLogged.next(false);
      }
    });
  }

  login(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.angularFireAuth
      .signOut()
      .then((_) => this.router.navigate(['/login']));
  }

  getData(
    collectionName: string,
    query: { property: string; comparation: any; expectedValue: string }
  ) {
    return this.angularFireStore
      .collection(collectionName, (ref) =>
        ref.where(query.property, query.comparation, query.expectedValue)
      )
      .valueChanges();
  }

  add(collectionName, data) {
    return this.angularFireStore.collection(collectionName).add(data);
  }

  update(
    collectionName,
    query: { property: string; comparation: any; expectedValue: any },
    data: any
  ) {
    return new Promise((resolve, reject) => {
      const doc = this.angularFireStore.collection(collectionName, (ref) =>
        ref.where(query.property, query.comparation, query.expectedValue)
      );
      doc.snapshotChanges().subscribe((res: any) => {
        let id = res[0].payload.doc.id;
        return resolve(
          this.angularFireStore.collection(collectionName).doc(id).update(data)
        );
      }, (err) => reject(err));
    });
  }

  async uploadPhotos(photos: any) {
    const promises = photos.map((photo) => {
      const ref = this.angularFireStorage.ref(
        photo.name + new Date().toString()
      );
      return new Promise((resolve, reject) => {
        this.getFileBlob(photo.blob, (blob) => {
          const task = ref.put(blob);
          return resolve(task);
        });
      });
    });
    const result = await Promise.all(promises);
    const response = [];
    for (const photo of result) {
      const name = photo['metadata']['name'];
      const url = await photo['ref']['getDownloadURL']();
      response.push({ name, url });
    }
    return response;
  }

  getFileBlob(url, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.addEventListener('load', () => {
      cb(xhr.response);
    });
    xhr.send();
  }
}
