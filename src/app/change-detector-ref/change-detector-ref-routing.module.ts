import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeDetectorRefPage } from './change-detector-ref.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeDetectorRefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeDetectorRefPageRoutingModule {}
