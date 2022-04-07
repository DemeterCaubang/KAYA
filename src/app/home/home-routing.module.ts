import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
                {
                  path: '',
                  redirectTo: 'home',
                  pathMatch: 'full'
                },
                {
                  path: 'home',
                  children: [
                    {
                    path: '',
                    loadChildren: () => import('../pages/network/network.module').then( m => m.NetworkPageModule)
                    }
                  ]
                },
                {
                  path: 'community',
                  children: [
                    {
                    path: '',
                    loadChildren: () => import('../pages/community/community.module').then( m => m.CommunityPageModule)
                    }
                  ]
                },
                {
                  path: 'webinars',
                  children: [
                    {
                    path: '',
                    loadChildren: () => import('../pages/webinars/webinars.module').then( m => m.WebinarsPageModule)
                    }
                  ]
                },
                {
                  path: 'health-and-wellness',
                  children: [
                    {
                    path: '',
                    loadChildren: () => import('../pages/health-and-wellness/health-and-wellness.module').then( m => m.HealthAndWellnessPageModule)
                    }
                  ]
                },
                {
                  path: 'consultation',
                  children: [
                    {
                    path: '',
                    loadChildren: () => import('../pages/consultation/consultation.module').then( m => m.ConsultationPageModule)
                    }
                  ]
                },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
