import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroChavePageRoutingModule } from './cadastro-chave-routing.module';

import { CadastroChavePage } from './cadastro-chave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroChavePageRoutingModule
  ],
  declarations: [CadastroChavePage]
})
export class CadastroChavePageModule {}
