import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroSoftwarePageRoutingModule } from './cadastro-software-routing.module';

import { CadastroSoftwarePage } from './cadastro-software.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroSoftwarePageRoutingModule
  ],
  declarations: [CadastroSoftwarePage]
})
export class CadastroSoftwarePageModule {}
