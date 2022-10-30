import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminregisterService } from './adminregister.service';
import { IconSetService } from '@coreui/icons-angular';

import {
  AbstractControl,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.scss'],
})
export class AdminregisterComponent {
  myForm: FormGroup;
  successMessage = '';
  constructor(
    private _myservice: AdminregisterService,
    private _router: Router,
    public iconSet: IconSetService
  ) {
    this.myForm = new FormGroup({
      first_name: new FormControl(null, Validators.required),
      last_name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required),
      phone_no: new FormControl(null, Validators.required),
      cnfpass: new FormControl(null, this.passValidator),
    });
    this.myForm.controls['password'].valueChanges.subscribe((x) =>
      this.myForm.controls['cnfpass'].updateValueAndValidity()
    );
  }

  isValid(controlName: any) {
    return (
      this.myForm.controls[controlName].invalid &&
      this.myForm.controls[controlName].touched
    );
  }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;
      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true,
          };
        }
      }
    }
    return null;
  }

  register() {
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      this._myservice.submitRegister(this.myForm.value).subscribe({
        next: (data) => {
          this.successMessage = 'Registration Success';
          this._router.navigate(['/adminlogin']);
        },
        error: (error) => (this.successMessage = 'Some error'),
      });
    }
  }
}
