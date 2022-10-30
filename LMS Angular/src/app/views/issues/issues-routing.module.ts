import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EditissueComponent } from './editissue/editissue.component';
import { UpdateissueComponent } from './updateissue/updateissue.component';
import { AddissueComponent } from './addissue/addissue.component';
import { IssuebooksComponent } from './issuebooks/issuebooks.component';

const routes: Routes = [
  {
    path: 'updateissue/:id',
    component: UpdateissueComponent,
  },
  {
    path: 'addissue',
    component: AddissueComponent,
  },
  // {
  //   path: 'editissue/:id',
  //   component: EditissueComponent,
  // },

  {
    path: 'issuebooks',
    component: IssuebooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IssuesRoutingModule {}
