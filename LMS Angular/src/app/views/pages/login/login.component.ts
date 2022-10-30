import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  successMessage = '';

  constructor(private myservice: LoginService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required),
    });
  }
  isValid(controlName: any) {
    return (
      this.loginForm.controls[controlName].invalid &&
      this.loginForm.controls[controlName].touched
    );
  }
  login() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.myservice.login(this.loginForm.value).subscribe({
        next: (data) => {
          console.log(data);
          localStorage.setItem('token', JSON.stringify(data));
          this.successMessage = 'Login Success';
          this.router.navigate(['/dashboard']);
        },
        error: (error) => (this.successMessage = 'Some error'),
      });
    }
  }
}
