import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor() { }

  report = {
    title: '',
    location: '',
    description: ''
  };
  reportForm: FormGroup;

  ngOnInit() {
    this.reportForm = new FormGroup({
      'title': new FormControl(this.report.title, [
        Validators.required,
      ]),
      'location': new FormControl(this.report.location, [
        Validators.required,
      ]),
      'description': new FormControl(this.report.description, [
        Validators.required,
      ])
    });
  }

  handleSubmit(f: NgForm) {
    if (!f.valid) {
      (<any>Object).values(this.reportForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }

    console.log(f.value)

  }

}
