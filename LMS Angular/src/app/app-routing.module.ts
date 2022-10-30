import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';
import { AdminloginComponent } from './views/pages/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './views/pages/adminregister/adminregister.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'profile',
        canActivate: [AuthGuard],

        component: ProfileComponent,
        data: {
          title: 'Profile Page',
        },
      },
      // {
      //   path: 'icons',
      //   loadChildren: () =>
      //     import('./views/icons/icons.module').then((m) => m.IconsModule),
      // },

      {
        path: 'pages',
        canActivate: [AuthGuard],

        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'issues',
        canActivate: [AuthGuard],

        loadChildren: () =>
          import('./views/issues/issues.module').then((m) => m.IssuesModule),
      },
      {
        path: 'book',
        canActivate: [AuthGuard],

        loadChildren: () =>
          import('./views/book/book.module').then((m) => m.BookModule),
      },
      {
        path: 'admin',
        canActivate: [AuthGuard],

        loadChildren: () =>
          import('./views/admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },

  {
    path: 'adminlogin',
    component: AdminloginComponent,

    data: {
      title: 'Admin Login Page',
    },
  },
  {
    path: 'adminregister',
    component: AdminregisterComponent,
    data: {
      title: 'Admin Register Page',
    },
  },

  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page',
    },
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      // relativeLinkResolution: 'legacy'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
