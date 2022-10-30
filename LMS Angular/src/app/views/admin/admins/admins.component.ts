import { Component, OnInit } from '@angular/core';
import { AdminsService } from './admins.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss'],
})
export class AdminsComponent implements OnInit {
  admins: any;
  librarians: any;
  users: any;
  currentUser = JSON.parse(localStorage.getItem('token') || '{}');
  currentUserRole: any;
  constructor(private adminsService: AdminsService, private route: Router) {
    this.currentUserRole = this.currentUser.role;
  }

  ngOnInit() {
    this.allAdmins();
    this.allLibrarians();
    this.allUsers();
  }

  allAdmins() {
    this.adminsService.getAllAdmins().subscribe({
      next: (data) => {
        console.log(data);
        this.admins = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  allLibrarians() {
    this.adminsService.getAllLibrarians().subscribe({
      next: (data) => {
        console.log(data);
        this.librarians = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  allUsers() {
    this.adminsService.getAllUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.users = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteadmin(id: any) {
    this.adminsService.deleteOneAdmin(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.admins = data;
        this.allAdmins();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deletelibrarian(id: any) {
    this.adminsService.deleteOneLibrarian(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.librarians = data;
        this.allLibrarians();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteuser(id: any) {
    this.adminsService.deleteOneUser(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.users = data;
        this.allUsers();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addnewadmin() {
    this.route.navigate(['admin/addadmin']);
  }
}
