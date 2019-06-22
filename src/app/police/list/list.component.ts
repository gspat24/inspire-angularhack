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
      this.reports = result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    });
  }

  compare(a, b) {
    if (a.createdAt ? new Date(a.createdAt) : '' < b.createdAt ? new Date(b.createdAt) : '') {
      return 0;
    }
    if (a.createdAt ? new Date(a.createdAt) : '' > b.createdAt ? new Date(b.createdAt) : '') {
      return 1;
    }
    return -1;
  }

}
