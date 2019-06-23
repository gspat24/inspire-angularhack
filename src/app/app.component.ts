import { Component, OnInit, OnChanges } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

// Services
import { FirebaseService } from '../app/services/firebase.service';
import { StorageService } from './services/storageServive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'inspire-angularhack';
  role;
  storageService;

  constructor(private fbServ: FirebaseService, private router: Router) {
    this.storageService = StorageService;
    this.role = localStorage.getItem('role');
  }

  async ngOnInit() {
    console.log('ONINIT');
    if (this.role === 'user') {
      this.router.navigate(['/user']);
    } else if (this.role === 'police') {
      this.router.navigate(['/police']);
    }
    this.storageService.watchStorage().subscribe((data: string) => {
      console.log(data);
      this.role = data;
    });


    if (!this.role) {
      this.router.navigate(['/']);
    }
    // GET REPORTS SAMPLE
    // this.fbServ.getReports().subscribe((result) => {
    //   console.log(result)
    // });

    // SET REPORT SAMPLE
    // const item = {
    //   title: 'Nguot',
    //   location: 'Mandaue',
    //   description: 'nguot lubot'
    // }
    // this.fbServ.setReport(item).then((result) => {
    //   console.log('RESULT: ', result)
    // })

    // GENERATE AND REGISTER TOKEN
    const fcm = firebase.messaging();
    // tslint:disable-next-line: deprecation
    await fcm.requestPermission();
    const token = await fcm.getToken();
    console.log(token);
    this.fbServ.setToken(token).then((result) => {
      console.log('TOKEN SET: ', result);
    });
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  logout() {
    this.storageService.removeItem('role');
    this.router.navigate(['/']);
  }
}
