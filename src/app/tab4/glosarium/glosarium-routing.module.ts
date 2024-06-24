import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlosariumPage } from './glosarium.page';

const routes: Routes = [
  {
    path: '',
    component: GlosariumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlosariumPageRoutingModule {}
