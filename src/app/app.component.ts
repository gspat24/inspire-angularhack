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
    this.fbServ.getReports().subscribe((result) => {
      console.log(result)
    });
  }
}
