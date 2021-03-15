import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroVistoriaPageRoutingModule } from './cadastro-vistoria-routing.module';

import { CadastroVistoriaPage } from './cadastro-vistoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroVistoriaPageRoutingModule
  ],
  declarations: [CadastroVistoriaPage]
})
export class CadastroVistoriaPageModule {}
