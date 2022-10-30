import { Component } from '@angular/core';

import { navItems } from './_nav';
import { adminNavItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
  currentUser: any;
  public navItems: any;
  public adminNavItems: any;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('token') || '{}');
    console.log('Role', this.currentUser.role);

    if (
      this.currentUser.role === 'admin' ||
      this.currentUser.role === 'librarian'
    ) {
      this.navItems = adminNavItems;
    } else if (this.currentUser.role === 'user') {
      this.navItems = navItems;
    }
  }
}
