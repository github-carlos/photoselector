import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css'],
})
export class AddAlbumComponent implements OnInit {
  photos: Array<any> = [];
  albumPhoto: Array<any> = [];
  newAlbum = new FormGroup({
    name: new FormControl(''),
    client_name: new FormControl(''),
    description: new FormControl(''),
    date_limit: new FormControl(),
    instruction_text: new FormControl(),
    pack_number: new FormControl(),
  });

  isUploading = false;
  constructor(
    private firebaseService: FirebaseService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  selectedDateLimit(event) {
    console.log('date lmit', event);
    this.newAlbum.get('date_limit').setValue(event);
  }

  addedAlbumPhoto(event) {
    this.albumPhoto = event.currentFiles.map((photoData) => ({
      name: photoData.name,
      blob: photoData.objectURL.changingThisBreaksApplicationSecurity,
    }));
    console.log('event', event);
    console.log('albumPhoto', this.albumPhoto);
  }
  addedPhotos(event) {
    console.log('event', event);
    this.photos = event.currentFiles.map((photoData) => ({
      name: photoData.name,
      blob: photoData.objectURL.changingThisBreaksApplicationSecurity,
    }));
    console.log('photos', this.photos);
  }

  async createNewAlbum() {
    if (!this.isUploading) {
    this.checkIfFormIsValid()
      .then(async () => {
        console.log('formGroup', this.newAlbum);
        const photosUploadedName = await this.firebaseService.uploadPhotos(
          this.photos
        );
        const uploadAlbumPhoto = (
          await this.firebaseService.uploadPhotos(this.albumPhoto)
        )[0];

        const obj = {
          ...this.newAlbum.value,
          photos: photosUploadedName.map((photo) => ({
            comment: '',
            url: photo?.url,
            selected: false,
          })),
          photo_capa: uploadAlbumPhoto?.url,
        };
        this.isUploading = true;
        this.firebaseService
          .add('albums', obj)
          .then((result) => {
            this.isUploading = false;
            this.router.navigate(['']);
          })
          .catch((error) => console.log('error', error));
      })
      .catch((err) => {
        this.toastService.showErrorMessage(
          'Formulário não preenchido corretamente'
        );
      });
    } else {
      this.toastService.showErrorMessage(
        'Já está sendo salvo'
      );
    }
  }

  private checkIfFormIsValid() {
    return new Promise((resolve, reject) => {
      if (this.albumPhoto.length === 0) {
        return reject('Selecione uma imagem de capa');
      }
      if (this.photos.length === 0) {
        return reject('Selecione pelo menos uma foto');
      }
      if (this.newAlbum.invalid) {
        return reject('Preencha todos os campos obrigatórios');
      }
      return resolve();
    });
  }
}
