import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../services/storageServive';

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
  storageService;

  ngOnInit() {
    this.storageService = StorageService;
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
      return;
    }


    if (f.value.username === 'user' && f.value.password === 'user') {
      this.storageService.setItem('role', 'user')
      this.router.navigate(['/user'])
    } else if (f.value.username === 'police' && f.value.password === 'police') {
      this.storageService.setItem('role', 'police')
      this.router.navigate(['/police'])
    }
  }
}
