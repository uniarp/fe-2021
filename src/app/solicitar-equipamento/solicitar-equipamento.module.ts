import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarEquipamentoPageRoutingModule } from './solicitar-equipamento-routing.module';

import { SolicitarEquipamentoPage } from './solicitar-equipamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarEquipamentoPageRoutingModule
  ],
  declarations: [SolicitarEquipamentoPage]
})
export class SolicitarEquipamentoPageModule {}
