import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RambuPage } from './rambu.page';

const routes: Routes = [
  {
    path: '',
    component: RambuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RambuPageRoutingModule {}
