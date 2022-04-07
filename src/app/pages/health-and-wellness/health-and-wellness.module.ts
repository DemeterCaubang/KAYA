import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthAndWellnessPageRoutingModule } from './health-and-wellness-routing.module';

import { HealthAndWellnessPage } from './health-and-wellness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthAndWellnessPageRoutingModule
  ],
  declarations: [HealthAndWellnessPage]
})
export class HealthAndWellnessPageModule {}
