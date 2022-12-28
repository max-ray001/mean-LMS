import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AddmultiplebooksService} from './addmultiplebooks.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addmultiplebooks',
  templateUrl: './addmultiplebooks.component.html',
  styleUrls: ['./addmultiplebooks.component.scss']
})
export class AddmultiplebooksComponent implements OnInit {
 
  newbooksform: FormGroup;
  newBookArray: {title: string, quantity: number, author: string, category: string, isbn:string, publication_date:string, publisher: string, available_books: number}[] = [];
  showAddedBookList: boolean = false;

  currentUser = JSON.parse(localStorage.getItem('token') || '{}');

  constructor(private addbooks: AddmultiplebooksService, private router: Router) {  
  this.currentUser= this.currentUser.user_id;
  this.newbooksform = new FormGroup({
      title: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      isbn: new FormControl(null, Validators.required),
      publication_date: new FormControl(null, Validators.required),
      publisher: new FormControl(null, Validators.required),
      available_books: new FormControl(null, Validators.required),
    })
  }

  ngOnInit(): void {
     if(this.newBookArray.length){
      this.showAddedBookList = true;
    }else{
      this.showAddedBookList = false;
    }
  }

  create(){
    console.log(this.newbooksform.value)
    if(this.newbooksform.valid){ 
      this.addbooks.addBook(this.newbooksform.value)
      .subscribe({ 
        next: (data:any) => {
          console.log(data);
          this.router.navigate(['book/books'])
        },
        error: (error:any) => {
          console.log(error)
        }
      })
    }
  }

  addNewBook(){
    if(this.newbooksform.valid){
      this.newBookArray.push(this.newbooksform.value)
      this.showAddedBookList = true;
    }
  }

  addMultipleBooks(){
    console.log(this.newBookArray);
    this.addbooks.addmultiplebooks(this.newBookArray)
    .subscribe({
      next: (data: any) => {
        console.log(data);
        this.router.navigate(['/book/books'])
      },
      error: (err: any) => {
        console.log();
        
      }
    })
  }

  removeBook(index: any){
    this.newBookArray.splice(index, 1);
  }

}
