import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddmultiplebooksService {
  private Url = '/api/';
  private apiurl = this.Url + 'librarians/';
  constructor(private http: HttpClient) { }
  addmultiplebooks(body: any){
    return this.http.post(this.apiurl + 'bulkupload', body);
  }
  addBook(body: any) {
    return this.http.post(this.Url + 'books/', body);
  }
}
