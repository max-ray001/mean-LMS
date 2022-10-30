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
// import { EditissueComponent } from './editissue/editissue.component';
import { UpdateissueComponent } from './updateissue/updateissue.component';
import { AddissueComponent } from './addissue/addissue.component';
import { IssuebooksComponent } from './issuebooks/issuebooks.component';
import { IssuesRoutingModule } from './issues-routing.module';

@NgModule({
  declarations: [
    // EditissueComponent,
    UpdateissueComponent,
    AddissueComponent,
    IssuebooksComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    IssuesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class IssuesModule {}
