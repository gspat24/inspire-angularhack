import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: 'AIzaSyDPJk_F9-sWIrVrfSNMe53uNxrlu4Iv4xE',
  authDomain: 'inspire-angularhack.firebaseapp.com',
  databaseURL: 'https://inspire-angularhack.firebaseio.com',
  projectId: 'inspire-angularhack',
  storageBucket: '',
  messagingSenderId: '526075913000',
  appId: '1:526075913000:web:2c89c9802229aab0'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
