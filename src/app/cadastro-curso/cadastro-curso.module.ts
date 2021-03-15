import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroCursoPageRoutingModule } from './cadastro-curso-routing.module';

import { CadastroCursoPage } from './cadastro-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroCursoPageRoutingModule
  ],
  declarations: [CadastroCursoPage]
})
export class CadastroCursoPageModule {}
