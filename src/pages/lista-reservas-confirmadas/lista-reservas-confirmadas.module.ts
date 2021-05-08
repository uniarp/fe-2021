import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaReservasConfirmadasPageRoutingModule } from './lista-reservas-confirmadas-routing.module';

import { ListaReservasConfirmadasPage } from './lista-reservas-confirmadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaReservasConfirmadasPageRoutingModule
  ],
  declarations: [ListaReservasConfirmadasPage]
})
export class ListaReservasConfirmadasPageModule {}
