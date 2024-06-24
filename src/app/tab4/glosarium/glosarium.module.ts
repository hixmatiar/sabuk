import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlosariumPageRoutingModule } from './glosarium-routing.module';

import { GlosariumPage } from './glosarium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlosariumPageRoutingModule
  ],
  declarations: [GlosariumPage]
})
export class GlosariumPageModule {}
