import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormComponent } from './form/form.component';

import { UserRoutingModule } from './user-routing.module';

import { FormsModule, ReactiveFormsModule } from 'node_modules/@angular/forms';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class UserModule { }
