// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
// import { EditissueService } from './editissue.service';
// @Component({
//   selector: 'app-editissue',
//   templateUrl: './editissue.component.html',
//   styleUrls: ['./editissue.component.scss'],
// })
// export class EditissueComponent implements OnInit {
//   id: any;
//   book_id = '';
//   user_id = '';
//   issue_date = '';
//   due_date = '';
//   return_date = '';
//   status = '';
//   no_of_days = '';
//   fine_amount = '';
//   updateinfo: any;
//   constructor(
//     private route: ActivatedRoute,
//     private issue: EditissueService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['id'];
//     this.onStart();
//   }

//   onStart() {
//     this.issue.getIssue(this.id).subscribe({
//       next: (data: any) => {
//         console.log(data);
//         this.book_id = data.book_id._id;
//         this.user_id = data.user_id._id;
//         this.issue_date = data.issue_date;
//         this.due_date = data.due_date;
//         this.return_date = data.return_date;
//         this.status = data.status;
//         this.no_of_days = data.no_of_days;
//         this.fine_amount = data.fine_amount;
//       },
//       error: (error) => {
//         console.log(error);
//       },
//     });
//   }
//   onSubmit(val: NgForm) {
//     console.log(val.form.value);
//     this.updateinfo = val.form.value;
//     this.issue.editIssue(this.id, this.updateinfo).subscribe({
//       next: (data: any) => {
//         console.log(data);
//         this.router.navigate(['/issues/issuebooks']);
//       },
//       error: (error) => {
//         console.log(error);
//       },
//     });
//   }
// }
