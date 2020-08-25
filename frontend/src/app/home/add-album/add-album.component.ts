import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  photos: Array<any>;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  uploadAlbumPhoto(event) {

  }

  addedPhotos(event) {
    console.log('event', event);
    this.photos = event.currentFiles
      .map(photoData => ({name: photoData.name, blob: photoData.objectURL.changingThisBreaksApplicationSecurity}));
    console.log('photos', this.photos);
  }

  uploadPhotos() {
    this.firebaseService.uploadPhotos(this.photos);
  }

}
