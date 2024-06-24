import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JalanPageRoutingModule } from './jalan-routing.module';

import { JalanPage } from './jalan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JalanPageRoutingModule
  ],
  declarations: [JalanPage]
})
export class JalanPageModule {}
