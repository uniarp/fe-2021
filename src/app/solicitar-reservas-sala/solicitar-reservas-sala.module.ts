import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarReservasSalaPageRoutingModule } from './solicitar-reserva-salas-routing.module';

import { SolicitarReservasSalaPage } from './solicitar-reservas-sala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarReservasSalaPageRoutingModule
  ],
  declarations: [SolicitarReservasSalaPage]
})
export class SolicitarReservasSalaPageModule {}
