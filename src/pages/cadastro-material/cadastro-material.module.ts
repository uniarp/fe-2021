import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroMaterialPageRoutingModule } from './cadastro-material-routing.module';

import { CadastroMaterialPage } from './cadastro-material.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroMaterialPageRoutingModule
  ],
  declarations: [CadastroMaterialPage]
})
export class CadastroMaterialPageModule {}
