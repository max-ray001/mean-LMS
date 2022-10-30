import { Component, Input } from '@angular/core';
import { DefaultHeaderService } from './default-header.service';
import { Router } from '@angular/router';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
  @Input() sidebarId: string = 'sidebar';

  loggedIn: boolean = false;
  // currentUser: any;
  // currentUserRole: any;

  public newMessages = new Array(4);
  public newTasks = new Array(5);
  public newNotifications = new Array(5);

  constructor(
    private classToggler: ClassToggleService,
    public defaultHeader: DefaultHeaderService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.ondisplay();
  }

  ondisplay() {
    this.defaultHeader.Icon();
    this.loggedIn = this.defaultHeader._loggedIn;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/dashboard']);
  }

  //   this.currentUser = JSON.parse(localStorage.getItem('token') || '{}');
  //   this.currentUserRole = this.currentUser.role;
  //   if (this.currentUserRole === 'admin') {
  //     localStorage.removeItem('token');
  //     this.router.navigate(['/adminlogin']);
  //   } else if (
  //     this.currentUserRole === 'user' ||
  //     this.currentUserRole === 'librarian'
  //   ) {
  //     localStorage.removeItem('token');
  //     this.router.navigate(['/login']);
  //   }
}
