import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaTiposEquipamentoPageRoutingModule } from './lista-tipos-equipamento-routing.module';
import { ListaTiposEquipamentoPage } from './lista-tipos-equipamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaTiposEquipamentoPageRoutingModule
  ],
  declarations: [ListaTiposEquipamentoPage]
})
export class ListaTiposEquipamentoPageModule {}
