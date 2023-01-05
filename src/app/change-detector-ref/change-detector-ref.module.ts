import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeDetectorRefPageRoutingModule } from './change-detector-ref-routing.module';

import { ChangeDetectorRefPage } from './change-detector-ref.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeDetectorRefPageRoutingModule
  ],
  declarations: [ChangeDetectorRefPage]
})
export class ChangeDetectorRefPageModule {}
