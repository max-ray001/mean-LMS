import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditadminComponent } from './editadmin/editadmin.component';
import { EditlibrarianComponent } from './editlibrarian/editlibrarian.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AddlibrarianComponent } from './addlibrarian/addlibrarian.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminsComponent } from './admins/admins.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminsComponent,
    EditadminComponent,
    EditlibrarianComponent,
    EdituserComponent,
    AddadminComponent,
    AddlibrarianComponent,
    AdduserComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule,
  ],
})
export class AdminModule {}
