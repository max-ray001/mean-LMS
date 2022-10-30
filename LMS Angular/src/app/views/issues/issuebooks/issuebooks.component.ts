import { Component, OnInit } from '@angular/core';
import { IssuebooksService } from './issuebooks.service';

@Component({
  selector: 'app-issuebooks',
  templateUrl: './issuebooks.component.html',
  styleUrls: ['./issuebooks.component.scss'],
})
export class IssuebooksComponent implements OnInit {
  issuebooks: any;
  fullname: any;
  currentUser: any;
  currentUserRole: any;
  constructor(private issueBooksService: IssuebooksService) {}

  ngOnInit() {
    this.getIssues();
    this.currentUser = JSON.parse(localStorage.getItem('token') || '{}');
    this.currentUserRole = this.currentUser.role;
  }

  getIssues() {
    this.issueBooksService.getAllIssues().subscribe({
      next: (data: any) => {
        for (let each in data) {
          this.fullname =
            data[each].user_id.first_name + ' ' + data[each].user_id.last_name;
          data[each].fullname = this.fullname;
          console.log(data);
        }

        this.issuebooks = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteissue(id: any) {
    this.issueBooksService.deleteOneIssue(id).subscribe({
      next: (data: any) => {
        console.log(data);

        this.getIssues();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
