import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IssuebooksService {
  private Url = '/api/';
  constructor(private http: HttpClient) {}
  getAllIssues() {
    return this.http.get(this.Url + 'issuebooks');
  }
  deleteOneIssue(id: any) {
    return this.http.delete(this.Url + 'issuebooks/' + id);
  }
}
