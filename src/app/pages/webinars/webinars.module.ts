import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebinarsPageRoutingModule } from './webinars-routing.module';

import { WebinarsPage } from './webinars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebinarsPageRoutingModule
  ],
  declarations: [WebinarsPage]
})
export class WebinarsPageModule {}
