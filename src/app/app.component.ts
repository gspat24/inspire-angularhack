import { Component, OnInit } from '@angular/core';

// Services
import { FirebaseService } from '../app/services/firebase.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'inspire-angularhack';

  constructor(private fbServ: FirebaseService) { }

  async ngOnInit() {
    console.log('ONINIT')
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
}
