import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AdduserService {
  private Url = '/api/';
  private apiurl = this.Url + 'admins/';
  constructor(private http: HttpClient) {}
  addUser(body: any) {
    return this.http.post(this.apiurl + 'users/', body);
  }
}
