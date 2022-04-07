import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'network',
    loadChildren: () => import('./pages/network/network.module').then( m => m.NetworkPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'community',
    loadChildren: () => import('./pages/community/community.module').then( m => m.CommunityPageModule)
  },
  {
    path: 'webinars',
    loadChildren: () => import('./pages/webinars/webinars.module').then( m => m.WebinarsPageModule)
  },
  {
    path: 'health-and-wellness',
    loadChildren: () => import('./pages/health-and-wellness/health-and-wellness.module').then( m => m.HealthAndWellnessPageModule)
  },
  {
    path: 'consultation',
    loadChildren: () => import('./pages/consultation/consultation.module').then( m => m.ConsultationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
