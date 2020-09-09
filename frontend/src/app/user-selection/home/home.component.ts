import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  link: string;
  albumSelection: any;

  constructor(private firebaseService: FirebaseService, private activatedRouter: ActivatedRoute) {
    this.link = activatedRouter.snapshot.paramMap.get('link');
  }

  ngOnInit(): void {
    console.log('home user selection');
   this.loadPhotos();
   //this.loadFakeData();

  }

  loadFakeData() {
    this.albumSelection = {
      photos: [
        {url: 'https://via.placeholder.com/350/150'},
        {url: 'https://via.placeholder.com/350/150'},
        {url: 'https://via.placeholder.com/350/150'},
        {url: 'https://via.placeholder.com/350/150'},
        {url: 'https://via.placeholder.com/350/150'},
        {url: 'https://via.placeholder.com/350/150'},
        {url: 'https://via.placeholder.com/350/150'},
      ]
    }
  }

  loadPhotos() {
    this.firebaseService.getData('user_selection', {property: 'album', comparation: '==', expectedValue: this.link})
      .subscribe(albumSelection => {
        if (albumSelection.length > 0) {
          this.albumSelection = albumSelection[0];
          console.log('album selection', this.albumSelection)
        }
      },
      err => console.log('err', err));
  }
}
