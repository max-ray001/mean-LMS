import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EditadminService {
  private Url = '/api/';
  private apiurl = this.Url + 'admins/';
  constructor(private http: HttpClient) {}

  getAdmin(id: any) {
    return this.http.get(this.apiurl + id);
  }

  editAdmin(id: any, body: any) {
    return this.http.put(this.apiurl + id, body);
  }
}
