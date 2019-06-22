import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

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
      (<any>Object).values(this.loginForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }


    if (f.value.username === 'user' && f.value.password === 'user') {
      this.router.navigate(['/user'])
    } else if (f.value.username === 'police' && f.value.password === 'police') {
      this.router.navigate(['/police'])
    }
  }
}
