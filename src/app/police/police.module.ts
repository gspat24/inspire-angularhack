import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { PoliceRoutingModule } from './police-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    PoliceRoutingModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class PoliceModule { }
