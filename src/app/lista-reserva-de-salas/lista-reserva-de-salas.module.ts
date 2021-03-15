import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaReservaDeSalasPageRoutingModule } from './lista-reserva-de-salas-routing.module';

import { ListaReservaDeSalasPage } from './lista-reserva-de-salas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaReservaDeSalasPageRoutingModule
  ],
  declarations: [ListaReservaDeSalasPage]
})
export class ListaReservaDeSalasPageModule {}
