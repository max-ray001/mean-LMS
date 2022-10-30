import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DefaultHeaderService {
  _loggedIn: boolean = true;
  constructor() {}

  Icon() {
    if (localStorage.getItem('token')) {
      this._loggedIn = true;
    } else {
      this._loggedIn = false;
    }
  }
}
