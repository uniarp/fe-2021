import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEquipamentosSolicitadosPageRoutingModule } from './lista-equipamentos-solicitados-routing.module';

import { ListaEquipamentosSolicitadosPage } from './lista-equipamentos-solicitados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEquipamentosSolicitadosPageRoutingModule
  ],
  declarations: [ListaEquipamentosSolicitadosPage]
})
export class ListaEquipamentosSolicitadosPageModule {}
