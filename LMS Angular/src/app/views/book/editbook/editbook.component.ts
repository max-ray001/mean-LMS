import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EditbookService } from './editbook.service';
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.scss'],
})
export class EditbookComponent implements OnInit {
  id: any;
  title = '';
  quantity = '';
  author = '';
  category = '';
  isbn = '';
  publication_date = '';
  publisher = '';
  available_books = '';

  updateinfo: any;
  constructor(
    private route: ActivatedRoute,
    private book: EditbookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.onStart();
  }
  onStart() {
    this.book.getBook(this.id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.title = data.title;
        this.quantity = data.quantity;
        this.author = data.author;
        this.category = data.category;
        this.isbn = data.isbn;
        this.publication_date = data.publication_date;
        this.publisher = data.publisher;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onSubmit(val: NgForm) {
    console.log(val.form.value);
    this.updateinfo = val.form.value;
    this.book.editBook(this.id, this.updateinfo).subscribe({
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
