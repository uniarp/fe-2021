import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaReservaEquipamentosPageRoutingModule } from './lista-reserva-equipamentos-routing.module';

import { ListaReservaEquipamentosPage } from './lista-reserva-equipamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaReservaEquipamentosPageRoutingModule
  ],
  declarations: [ListaReservaEquipamentosPage]
})
export class ListaReservaEquipamentosPageModule {}
