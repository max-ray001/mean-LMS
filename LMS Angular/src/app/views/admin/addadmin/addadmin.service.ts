import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AddadminService {
  private Url = '/api/';
  private apiurl = this.Url + 'admins/';
  constructor(private http: HttpClient) {}

  addAdmin(body: any) {
    return this.http.post(this.apiurl, body);
  }
}
