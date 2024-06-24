import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarkahPage } from './markah.page';

const routes: Routes = [
  {
    path: '',
    component: MarkahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarkahPageRoutingModule {}
