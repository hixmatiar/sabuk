import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JalanPage } from './jalan.page';

const routes: Routes = [
  {
    path: '',
    component: JalanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JalanPageRoutingModule {}
