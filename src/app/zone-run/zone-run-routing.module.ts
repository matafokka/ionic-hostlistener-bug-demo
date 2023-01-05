import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZoneRunPage } from './zone-run.page';

const routes: Routes = [
  {
    path: '',
    component: ZoneRunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZoneRunPageRoutingModule {}
