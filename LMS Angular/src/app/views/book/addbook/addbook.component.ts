import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddbookService } from './addbook.service';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss'],
})
export class AddbookComponent implements OnInit {
  addinfo: any;
  constructor(private book: AddbookService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(val: NgForm) {
    console.log(val.form.value);
    this.addinfo = val.form.value;
    this.book.addBook(this.addinfo).subscribe({
      next: (data: any) => {
        console.log(data);
        this.router.navigate(['/book/books']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
