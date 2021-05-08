import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCursoPageRoutingModule } from './lista-curso-routing.module';

import { ListaCursoPage } from './lista-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCursoPageRoutingModule
  ],
  declarations: [ListaCursoPage]
})
export class ListaCursoPageModule {}
