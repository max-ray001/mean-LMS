import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditadminComponent } from './editadmin/editadmin.component';
import { EditlibrarianComponent } from './editlibrarian/editlibrarian.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AddlibrarianComponent } from './addlibrarian/addlibrarian.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminsComponent } from './admins/admins.component';

const routes: Routes = [
  {
    path: 'addadmin',
    component: AddadminComponent,
  },
  {
    path: 'addlibrarian',
    component: AddlibrarianComponent,
  },
  {
    path: 'adduser',
    component: AdduserComponent,
  },
  {
    path: 'admins',
    component: AdminsComponent,
  },
  {
    path: 'editadmin/:id',
    component: EditadminComponent,
  },
  {
    path: 'editlibrarian/:id',
    component: EditlibrarianComponent,
  },
  {
    path: 'edituser/:id',
    component: EdituserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
