import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddlibrarianService } from './addlibrarian.service';
@Component({
  selector: 'app-addlibrarian',
  templateUrl: './addlibrarian.component.html',
  styleUrls: ['./addlibrarian.component.scss'],
})
export class AddlibrarianComponent implements OnInit {
  addinfo: any;
  constructor(private librarian: AddlibrarianService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(val: NgForm) {
    console.log(val.form.value);
    this.addinfo = val.form.value;
    this.librarian.addLibrarian(this.addinfo).subscribe({
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
