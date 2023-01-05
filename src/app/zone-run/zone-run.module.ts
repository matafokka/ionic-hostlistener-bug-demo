import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZoneRunPageRoutingModule } from './zone-run-routing.module';

import { ZoneRunPage } from './zone-run.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZoneRunPageRoutingModule
  ],
  declarations: [ZoneRunPage]
})
export class ZoneRunPageModule {}
