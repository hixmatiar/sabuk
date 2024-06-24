import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RambuPageRoutingModule } from './rambu-routing.module';

import { RambuPage } from './rambu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RambuPageRoutingModule
  ],
  declarations: [RambuPage]
})
export class RambuPageModule {}
