import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddissueService {
  private Url = '/api/';
  private apiurl = this.Url + 'issuebooks/';
  constructor(private http: HttpClient) {}

  addIssue(body: any) {
    return this.http.post(this.apiurl, body);
  }
}
