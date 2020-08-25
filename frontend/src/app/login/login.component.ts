import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private firebaseService: FirebaseService, private toastService: ToastService, private router: Router) { }

  ngOnInit(): void {
  }

  makeLogin() {
    return this.firebaseService.login(this.login.get('email').value, this.login.get('password').value)
    .then((result) => this.toastService.showSuccessMessage('Login feito com sucesso'))
    .catch((error) => this.toastService.showErrorMessage('Falha ao fazer login'));
  }

}
