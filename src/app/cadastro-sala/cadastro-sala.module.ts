import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroSalaPageRoutingModule } from './cadastro-sala-routing.module';

import { CadastroSalaPage } from './cadastro-sala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroSalaPageRoutingModule
  ],
  declarations: [CadastroSalaPage]
})
export class CadastroSalaPageModule {}
