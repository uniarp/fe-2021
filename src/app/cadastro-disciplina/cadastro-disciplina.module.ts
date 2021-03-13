import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroDisciplinaPageRoutingModule } from './cadastro-disciplina-routing.module';

import { CadastroDisciplinaPage } from './cadastro-disciplina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroDisciplinaPageRoutingModule
  ],
  declarations: [CadastroDisciplinaPage]
})
export class CadastroDisciplinaPageModule {}
