import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroTipoEquipamentoPageRoutingModule } from './cadastro-tipo-equipamento-routing.module';

import { CadastroTipoEquipamentoPage } from './cadastro-tipo-equipamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroTipoEquipamentoPageRoutingModule
  ],
  declarations: [CadastroTipoEquipamentoPage]
})
export class CadastroTipoEquipamentoPageModule {}
