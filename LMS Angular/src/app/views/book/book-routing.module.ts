import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { BooksComponent } from './books/books.component';
import { AddmultiplebooksComponent } from './addmultiplebooks/addmultiplebooks.component';

const routes: Routes = [
  {
    path: 'addbook',
    component: AddbookComponent,
    data: {
      title: 'Add Book',
    },
  },
  {
    path: 'addmultiplebooks',
    component: AddmultiplebooksComponent ,
    data: {
      title: 'Add Multiple Books',
    },
  },
  {
    path: 'editbook/:id',
    component: EditbookComponent,
    data: {
      title: 'Edit Book',
    },
  },
  {
    path: 'books',
    component: BooksComponent,
    data: {
      title: 'Books',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
