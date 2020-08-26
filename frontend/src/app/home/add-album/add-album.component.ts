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
  albumPhoto: any;
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

  addedAlbumPhoto(event) {
    this.albumPhoto = event
      .currentFiles
        .map(photoData => ({name: photoData.name, blob: photoData.objectURL.changingThisBreaksApplicationSecurity}));
    console.log('event', event)
    console.log('albumPhoto', this.albumPhoto);
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
    const photosUploadedName = await this.firebaseService.uploadPhotos(this.photos);
    const uploadAlbumPhoto = (await this.firebaseService.uploadPhotos(this.albumPhoto))[0];

    console.log('photos uploaded', photosUploadedName);
    console.log('album photo', uploadAlbumPhoto);
    const obj = {
      ...this.newAlbum.value,
      photos: photosUploadedName.map(photo => ({comment: '', url: photo.url, selected: false})),
      photo_capa: uploadAlbumPhoto.url
    };
    this.firebaseService.add('albums', obj).then(result => console.log('result', result))
      .catch(error => console.log('error', error));
  }
}
