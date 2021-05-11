import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEntregaMaterialPageRoutingModule } from './cadastro-entrega-material-routing.module';

import { CadastroEntregaMaterialPage } from './cadastro-entrega-material.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroEntregaMaterialPageRoutingModule
  ],
  declarations: [CadastroEntregaMaterialPage]
})
export class CadastroEntregaMaterialPageModule {}
