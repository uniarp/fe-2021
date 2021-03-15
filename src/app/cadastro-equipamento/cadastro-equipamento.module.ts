import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEquipamentoPageRoutingModule } from './cadastro-equipamento-routing.module';

import { CadastroEquipamentoPage } from './cadastro-equipamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroEquipamentoPageRoutingModule
  ],
  declarations: [CadastroEquipamentoPage]
})
export class CadastroEquipamentoPageModule {}
