import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'zone-run',
    loadChildren: () => import('./zone-run/zone-run.module').then( m => m.ZoneRunPageModule)
  },
  {
    path: 'change-detector-ref',
    loadChildren: () => import('./change-detector-ref/change-detector-ref.module').then( m => m.ChangeDetectorRefPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
