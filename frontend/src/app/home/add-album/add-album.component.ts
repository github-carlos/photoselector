import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {

  photos: Array<any>;
  newAlbum = new FormGroup({
    name: new FormControl(''),
    client_name: new FormControl(''),
    description: new FormControl(''),
    date_limit: new FormControl(),
    instruction_text: new FormControl(),
    maximum_selection: new FormControl()
  });
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  uploadAlbumPhoto(event) {

  }

  selectedDateLimit(event) {
    console.log('date lmit', event);
  }

  addedPhotos(event) {
    console.log('event', event);
    this.photos = event.currentFiles
      .map(photoData => ({name: photoData.name, blob: photoData.objectURL.changingThisBreaksApplicationSecurity}));
    console.log('photos', this.photos);
  }

  async uploadPhotos() {
    const photosUploadedName = await this.firebaseService.uploadPhotos(this.photos);
    console.log('photosuploaded', photosUploadedName);
  }

  async createNewAlbum() {
    console.log('formGroup', this.newAlbum);
  }

}
