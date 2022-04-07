import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthAndWellnessPage } from './health-and-wellness.page';

const routes: Routes = [
  {
    path: '',
    component: HealthAndWellnessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthAndWellnessPageRoutingModule {}
