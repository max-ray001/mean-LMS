import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddissueService } from './addissue.service';
@Component({
  selector: 'app-addissue',
  templateUrl: './addissue.component.html',
  styleUrls: ['./addissue.component.scss'],
})
export class AddissueComponent implements OnInit {
  addinfo: any;
  constructor(private issue: AddissueService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(val: NgForm) {
    console.log(val.form.value);
    this.addinfo = val.form.value;
    this.issue.addIssue(this.addinfo).subscribe({
      next: (data: any) => {
        console.log(data);
        this.router.navigate(['/issues/issuebooks']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
