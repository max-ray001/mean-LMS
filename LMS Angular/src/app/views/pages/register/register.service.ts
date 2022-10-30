import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private Url = '/api/';
  private apiurl = this.Url + 'usersauth/';
  constructor(private http: HttpClient) {}
  submitRegister(body: any) {
    return this.http.post(this.apiurl + 'userregister', body, {
      observe: 'body',
    });
  }
}
