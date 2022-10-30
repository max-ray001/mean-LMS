import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AdminsService {
  private Url = '/api/';
  private apiurl = this.Url + 'admins/';
  constructor(private http: HttpClient) {}
  getAllAdmins() {
    return this.http.get(this.apiurl + 'alladmins');
  }
  getAllLibrarians() {
    return this.http.get(this.apiurl + 'alllibrarians');
  }
  getAllUsers() {
    return this.http.get(this.apiurl + 'allusers');
  }
  deleteOneAdmin(id: any) {
    return this.http.delete(this.apiurl + id);
  }
  deleteOneLibrarian(id: any) {
    return this.http.delete(this.apiurl + 'users/' + id);
  }
  deleteOneUser(id: any) {
    return this.http.delete(this.apiurl + 'users/' + id);
  }
}
