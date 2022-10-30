import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private Url = '/api/';
  private apiurl = this.Url + 'users/';
  constructor(private http: HttpClient) {}

  paginateduser(offset: any, limit: any) {
    let paginationParams = new HttpParams();
    paginationParams = paginationParams.append('offset', offset);
    paginationParams = paginationParams.append('limit', limit);
    return this.http.get('/api/users/userbooks', {
      params: paginationParams,
    });
  }
}
