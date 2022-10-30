import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdduserService } from './adduser.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
})
export class AdduserComponent implements OnInit {
  addinfo: any;
  constructor(private user: AdduserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(val: NgForm) {
    console.log(val.form.value);
    this.addinfo = val.form.value;
    this.user.addUser(this.addinfo).subscribe({
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
