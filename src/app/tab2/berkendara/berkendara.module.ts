import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BerkendaraPageRoutingModule } from './berkendara-routing.module';

import { BerkendaraPage } from './berkendara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BerkendaraPageRoutingModule
  ],
  declarations: [BerkendaraPage]
})
export class BerkendaraPageModule {}
