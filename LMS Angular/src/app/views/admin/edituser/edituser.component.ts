import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EdituserService } from './edituser.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss'],
})
export class EdituserComponent implements OnInit {
  id: any;
  _firstname = '';
  _lastname = '';
  _email = '';
  _phoneno = '';
  _address = '';

  updateinfo: any;

  constructor(
    private route: ActivatedRoute,
    private admin: EdituserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.onStart();
  }

  onStart() {
    this.admin.getUser(this.id).subscribe({
      next: (data: any) => {
        console.log(data);
        this._firstname = data.first_name;
        this._lastname = data.last_name;
        this._email = data.email;
        this._phoneno = data.phone_no;
        this._address = data.address;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onSubmit(val: NgForm) {
    console.log(val.form.value);
    this.updateinfo = val.form.value;
    this.admin.editUser(this.id, this.updateinfo).subscribe({
      next: (data: any) => {
        console.log(data);
        this.router.navigate(['/admin/admins']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
