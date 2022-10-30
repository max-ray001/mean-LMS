import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AddbookService {
  private Url = '/api/';
  private apiurl = this.Url + 'books/';
  constructor(private http: HttpClient) {}

  addBook(body: any) {
    return this.http.post(this.apiurl, body);
  }
}
