import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EditadminService } from './editadmin.service';
@Component({
  selector: 'app-editadmin',
  templateUrl: './editadmin.component.html',
  styleUrls: ['./editadmin.component.scss'],
})
export class EditadminComponent implements OnInit {
  id: any;
  _firstname = '';
  _lastname = '';
  _email = '';
  _phoneno = '';

  updateinfo: any;
  constructor(
    private route: ActivatedRoute,
    private admin: EditadminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.onStart();
  }
  onStart() {
    this.admin.getAdmin(this.id).subscribe({
      next: (data: any) => {
        console.log(data);
        this._firstname = data.first_name;
        this._lastname = data.last_name;
        this._email = data.email;
        this._phoneno = data.phone_no;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onSubmit(val: NgForm) {
    console.log(val.form.value);
    this.updateinfo = val.form.value;
    this.admin.editAdmin(this.id, this.updateinfo).subscribe({
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
