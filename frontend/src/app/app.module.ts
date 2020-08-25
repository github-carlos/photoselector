import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';


// modules
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
// primegn imports
import {ToastModule} from 'primeng/toast';



// services
import { FirebaseService } from './services/firebase.service';
import { ToastService } from './services/toast.service';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastModule,
    AngularFireStorageModule
  ],
  providers: [FirebaseService, ToastService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
