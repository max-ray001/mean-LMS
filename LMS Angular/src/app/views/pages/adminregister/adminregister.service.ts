import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AdminregisterService {
  private Url = '/api/';
  private apiurl = this.Url + 'adminsauth/';
  constructor(private http: HttpClient) {}
  submitRegister(body: any) {
    return this.http.post(this.apiurl + 'adminregister', body, {
      observe: 'body',
    });
  }
}
