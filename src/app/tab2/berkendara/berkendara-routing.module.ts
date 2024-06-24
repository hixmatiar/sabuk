import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BerkendaraPage } from './berkendara.page';

const routes: Routes = [
  {
    path: '',
    component: BerkendaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BerkendaraPageRoutingModule {}
