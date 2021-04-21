import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarReservaSalaPageRoutingModule } from './solicitar-reserva-sala-routing.module';

import { SolicitarReservaSalaPage } from './solicitar-reserva-sala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarReservaSalaPageRoutingModule
  ],
  declarations: [SolicitarReservaSalaPage]
})
export class SolicitarReservaSalaPageModule {}
