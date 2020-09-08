import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    console.log('home user selection')
  }

  loadPhotos() {
    this.firebaseService.getData('user_selection')
      .subscribe(photos => {
        console.log('photos', photos);
      },
      err => console.log('err', err));
  }
}
