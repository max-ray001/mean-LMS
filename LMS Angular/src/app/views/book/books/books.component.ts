import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: any;
  currentActive = JSON.parse(localStorage.getItem('token') || '{}');
  currentActiveRole: any;

  delBooks: string[] = [];

  delid = {
    deleteid: this.delBooks,
  };
  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.getBooks();
    this.currentActiveRole = this.currentActive.role;
  }

  getBooks() {
    this.booksService.getAllBooks().subscribe({
      next: (data) => {
        console.log(data);
        this.books = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deletebook(id: any) {
    this.booksService.deleteOneBook(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.books = data;
        this.getBooks();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onChange(event: any, id: any) {
    if (event.target.checked) {
      this.delBooks.push(id);
    } else {
      this.delBooks = this.delBooks.filter((m) => m != id);
    }
    console.log(this.delBooks);
  }

  bulkdelete() {
    this.delid.deleteid = this.delBooks;

    this.booksService.deleteMulBooks(this.delid).subscribe({
      next: (data: any) => {
        console.log(data);
        this.getBooks();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
