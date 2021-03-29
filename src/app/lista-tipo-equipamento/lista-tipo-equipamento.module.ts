import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaTipoEquipamentoPageRoutingModule } from './lista-tipo-equipamento-routing.module';

import { ListaTipoEquipamentoPage } from './lista-tipo-equipamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaTipoEquipamentoPageRoutingModule
  ],
  declarations: [ListaTipoEquipamentoPage]
})
export class ListaTipoEquipamentoPageModule {}
