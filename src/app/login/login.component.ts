import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() { }

  user = {
    username: '',
    password: ''
  };
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(this.user.username, [
        Validators.required,
      ]),
      'password': new FormControl(this.user.password, [
        Validators.required,
      ])
    });
  }

  handleSubmit(f: NgForm) {
    if (!f.valid) {
      return console.log("DONT CALL SERVICE")
    }
    console.log("CALL SERVICE")
  }
}
