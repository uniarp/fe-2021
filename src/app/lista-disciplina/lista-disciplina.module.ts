import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDisciplinaPageRoutingModule } from './lista-disciplina-routing.module';

import { ListaDisciplinaPage } from './lista-disciplina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDisciplinaPageRoutingModule
  ],
  declarations: [ListaDisciplinaPage]
})
export class ListaDisciplinaPageModule {}
