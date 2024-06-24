import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarkahPageRoutingModule } from './markah-routing.module';

import { MarkahPage } from './markah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarkahPageRoutingModule
  ],
  declarations: [MarkahPage]
})
export class MarkahPageModule {}
