import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarReservaSalasPageRoutingModule } from './solicitar-reserva-salas-routing.module';

import { SolicitarReservaSalasPage } from './solicitar-reserva-salas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarReservaSalasPageRoutingModule
  ],
  declarations: [SolicitarReservaSalasPage]
})
export class SolicitarReservaSalasPageModule {}
