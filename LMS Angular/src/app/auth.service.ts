import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = JSON.parse(localStorage.getItem('token') || '{}');
  constructor(private http: HttpClient) {}
  loggedIn() {
    return !!this.currentUser.access_token;
  }
}
