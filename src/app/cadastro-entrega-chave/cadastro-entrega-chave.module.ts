import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEntregaChavePageRoutingModule } from './cadastro-entrega-chave-routing.module';

import { CadastroEntregaChavePage } from './cadastro-entrega-chave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroEntregaChavePageRoutingModule
  ],
  declarations: [CadastroEntregaChavePage]
})
export class CadastroEntregaChavePageModule {}
