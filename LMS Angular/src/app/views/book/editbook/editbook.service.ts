import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EditbookService {
  private Url = '/api/';
  private apiurl = this.Url + 'books/';
  constructor(private http: HttpClient) {}
  getBook(id: any) {
    return this.http.get(this.apiurl + id);
  }

  editBook(id: any, body: any) {
    return this.http.put(this.apiurl + id, body);
  }
}
