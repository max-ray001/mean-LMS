import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'auth.interceptor';
// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';

import { BooksService } from './views/book/books/books.service';
import { LoginService } from './views/pages/login/login.service';
import { RegisterService } from './views/pages/register/register.service';
import { UpdateissueService } from './views/issues/updateissue/updateissue.service';
import { IssuebooksService } from './views/issues/issuebooks/issuebooks.service';
import { DefaultHeaderService } from 'src/app/containers/default-layout/default-header/default-header.service';
import { ProfileComponent } from './views/profile/profile.component';
import { AddissueService } from './views/issues/addissue/addissue.service';
import { EditadminService } from './views/admin/editadmin/editadmin.service';
import { EditlibrarianService } from './views/admin/editlibrarian/editlibrarian.service';
import { EdituserService } from './views/admin/edituser/edituser.service';
import { AdduserService } from './views/admin/adduser/adduser.service';
import { AddlibrarianService } from './views/admin/addlibrarian/addlibrarian.service';
import { AddadminService } from './views/admin/addadmin/addadmin.service';
import { AdminsService } from './views/admin/admins/admins.service';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
// import { EditissueService } from './views/issues/editissue/editissue.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, ProfileComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    FormsModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    HttpClientModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    NgbModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    AuthService,
    AuthGuard,
    IconSetService,
    Title,
    BooksService,
    LoginService,
    RegisterService,
    UpdateissueService,
    IssuebooksService,
    AdminsService,
    BooksService,
    EdituserService,
    EditlibrarianService,
    EditadminService,
    AdduserService,
    AddlibrarianService,
    AddadminService,
    // EditissueService,
    AddissueService,
    DefaultHeaderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
