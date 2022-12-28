import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { AddbookComponent } from './addbook/addbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { BooksComponent } from './books/books.component';

import {
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddmultiplebooksComponent } from './addmultiplebooks/addmultiplebooks.component';

@NgModule({
  declarations: [AddbookComponent, EditbookComponent, BooksComponent, AddmultiplebooksComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class BookModule {}
