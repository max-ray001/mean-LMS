import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateissueService } from './updateissue.service';
@Component({
  selector: 'app-updateissue',
  templateUrl: './updateissue.component.html',
  styleUrls: ['./updateissue.component.scss'],
})
export class UpdateissueComponent implements OnInit {
  id: any;
  due_date: any;
  return_date = '';
  updateinfo: any;
  constructor(
    private route: ActivatedRoute,
    private issue: UpdateissueService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.onStart();
  }

  onStart() {
    this.issue.getIssue(this.id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.due_date = data.due_date;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onSubmit(val: NgForm) {
    this.updateinfo = val.form.value;
    this.updateinfo.due_date = this.due_date;
    console.log(this.updateinfo);

    this.issue.editIssue(this.id, this.updateinfo).subscribe({
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
