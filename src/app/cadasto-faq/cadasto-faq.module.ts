import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastoFaqPageRoutingModule } from './cadasto-faq-routing.module';

import { CadastoFaqPage } from './cadasto-faq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastoFaqPageRoutingModule
  ],
  declarations: [CadastoFaqPage]
})
export class CadastoFaqPageModule {}
