import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!request || !request.url) {
      console.log(request);
      return next.handle(request);
    }

    let authReq = request;
    let accessToken;

    const currentUser = JSON.parse(localStorage.getItem('token') || '{}');

    if (currentUser && currentUser.access_token) {
      accessToken = currentUser.access_token;
    }

    if (accessToken != null) {
      authReq = this.addTokenHeader(request, accessToken);
    }

    console.log(authReq);

    return next.handle(authReq);
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      withCredentials: true,
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    });
  }
}
