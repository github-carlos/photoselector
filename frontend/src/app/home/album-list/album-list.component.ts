import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
  subscription: Subscription;
  albums: Array<any>;
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async loadAlbums() {
    this.subscription = this.firebaseService.onLogged.subscribe((logged) => {
      console.log('user logged', logged);
      if (logged) {
        this.firebaseService.getData('albums').subscribe(
          (data) => {
            console.log('data', data);
            this.albums = data;
          },
          (error) => console.log('error', error)
        );
      }
    });
  }
}
