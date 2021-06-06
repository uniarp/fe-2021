import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaReservasEquipamentoPageRoutingModule } from './lista-reservas-equipamento-routing.module';

import { ListaReservasEquipamentoPage } from './lista-reservas-equipamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaReservasEquipamentoPageRoutingModule
  ],
  declarations: [ListaReservasEquipamentoPage]
})
export class ListaReservasEquipamentoPageModule {}
