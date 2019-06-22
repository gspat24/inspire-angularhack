import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { FirebaseService } from '../app/services/firebase.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'inspire-angularhack';
  role;

  constructor(private fbServ: FirebaseService, private router: Router) {
  }

  async ngOnInit() {
    console.log('ONINIT')
    this.role = localStorage.getItem("role");


    if (!this.role) {
      this.router.navigate(['/'])
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
  }

  ngOnChanges(changes) {
    console.log(changes)
  }

  logout() {
    this.role = "";
    localStorage.removeItem('role');
    this.router.navigate(['/'])
  }
}
