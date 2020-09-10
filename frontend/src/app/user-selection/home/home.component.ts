import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  link: string;
  albumSelection: any;


  isSaving = false;
  showSavingButton = true;
  constructor(
    private firebaseService: FirebaseService, private activatedRouter: ActivatedRoute,
    private toastService: ToastService
   ) {
    this.link = activatedRouter.snapshot.paramMap.get('link');
  }

  ngOnInit(): void {
   this.loadPhotos();
   //this.loadFakeData();

  }

  loadFakeData() {
    this.albumSelection = {
      photos: [
        {url: 'https://via.placeholder.com/350/150', selected: false, comment: ''},
        {url: 'https://via.placeholder.com/350/150', selected: true, comment: ''},
        {url: 'https://via.placeholder.com/350/150', selected: false, comment: ''},
        {url: 'https://via.placeholder.com/350/150', selected: false, comment: ''},
        {url: 'https://via.placeholder.com/350/150', selected: true, comment: ''},
        {url: 'https://via.placeholder.com/350/150', selected: false, comment: ''},
        {url: 'https://via.placeholder.com/350/150', selected: false, comment: ''},
      ]
    }
  }

  loadPhotos() {
    this.firebaseService.getData('user_selection', {property: 'album', comparation: '==', expectedValue: this.link})
      .subscribe(albumSelection => {
        if (albumSelection.length > 0) {
          this.albumSelection = albumSelection[0];
        }
      },
      err => console.log('err', err));
  }

  saveLikedPhoto(liked: boolean, item) {
    item.selected = liked;
  }
  saveCommentedPhoto(comment: string, item) {
    item.comment = comment;
  }

  saveChanges() {
    this.isSaving = true;

    this.firebaseService
     .update('user_selection',
       {property: 'link', comparation: '==', expectedValue: this.albumSelection.link},
       {photos: this.albumSelection.photos})
       .then((result) => {
         this.toastService.showSuccessMessage("Fotos Selecionadas com Sucesso!");
         this.isSaving = false;
       }).catch(err => {
         this.toastService.showErrorMessage("Opa, houve algum problema para salvar sua seleção :(");
         this.isSaving = false;
        });
  }
}
