import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddadminService } from './addadmin.service';
@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.scss'],
})
export class AddadminComponent implements OnInit {
  addinfo: any;
  constructor(private admin: AddadminService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(val: NgForm) {
    console.log(val.form.value);
    this.addinfo = val.form.value;
    this.admin.addAdmin(this.addinfo).subscribe({
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
