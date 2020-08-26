import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage} from '@angular/fire/storage';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Injectable()
export class FirebaseService {
  auth: AngularFirestore;
  constructor(private angularFireStore: AngularFirestore,
              private angularFireAuth: AngularFireAuth,
              private angularFireStorage: AngularFireStorage,
              private router: Router) {
    this.angularFireAuth.authState.subscribe(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigate(['/home']);
    });
  }


  login(email: string, password: string) {
    console.log('Making Login');
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    const ref = this.angularFireStorage.ref('eris.jpeg');
    // ref.getDownloadURL().subscribe(url => console.log(url, 'url'))
    return this.angularFireAuth.signOut().then((_) => this.router.navigate(['/login']));
  }

  async uploadPhotos(photos: any) {

    const promises = photos.map((photo) => {
      const ref = this.angularFireStorage.ref(photo.name + new Date().toString());
      return new Promise((resolve, reject) => {
        this.getFileBlob(photo.blob, (blob) => {
          console.log('blbo', blob);
          const task = ref.put(blob);
          return resolve(task);
        });
      });
    });
    const result = await Promise.all(promises);
    return result.map((photo: any) => photo.metadata.name);
  }

  getFileBlob (url, cb) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.addEventListener('load', () => {
        cb(xhr.response);
      });
      xhr.send();
  }
}
