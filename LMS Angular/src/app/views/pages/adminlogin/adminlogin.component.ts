import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminloginService } from './adminlogin.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss'],
})
export class AdminloginComponent {
  loginForm: FormGroup;
  successMessage = '';
  constructor(private myservice: AdminloginService, private _router: Router) {
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
        next: (data: any) => {
          console.log(data);
          localStorage.setItem('token', JSON.stringify(data));
          this.successMessage = 'Login Success';
          this._router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
