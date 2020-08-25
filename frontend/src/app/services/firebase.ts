import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
export class FirebaseService {
  auth: AngularFirestore;
  constructor(private angularFireStore: AngularFirestore, private angularFireAuth: AngularFireAuth) {}


  login(email: string, password: string) {
    console.log('Making Login');
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log("Resposne", response);
      })
      .catch(err => console.log('error', err));
  }
}
