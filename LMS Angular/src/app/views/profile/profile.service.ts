import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private Url = '/api/';
  private apiurl = this.Url + 'users/';
  constructor(private http: HttpClient) {}
  getcurrentUser() {
    return this.http.get(this.apiurl + 'user');
  }
}
