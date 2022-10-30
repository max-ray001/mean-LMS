import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private Url = '/api/';
  private apiurl = this.Url + 'usersauth/';

  constructor(private http: HttpClient) {}

  login(body: any) {
    return this.http.post(this.apiurl + 'userlogin', body, {
      observe: 'body',
    });
  }
}
