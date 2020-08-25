import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.login('usuarioteste@teste.com', '1234567');
  }

}
