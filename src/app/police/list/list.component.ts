import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../services/firebase.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  reports;

  constructor(private fbServ: FirebaseService) {
    this.reports = [];
  }

  ngOnInit() {
    this.fbServ.getReports().subscribe((result) => {
      console.log(result)
      this.reports = result.reverse();
    });
  }

  toDate(date) {
    return new Date(date)
  }

}
