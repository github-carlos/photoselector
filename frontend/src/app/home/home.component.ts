import { Component, OnInit } from '@angular/core';
import { AddAlbumComponent } from './add-album/add-album.component';
import { FirebaseService } from '../services/firebase.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private toastService: ToastService) { }

  ngOnInit(): void {
  }

  logout() {
    this.firebaseService.logout()
      .then(() => {
        this.toastService.showSuccessMessage('Logout feito com sucesso.');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userPassword');
      })
      .catch(error => console.log('error', error));
  }

}
