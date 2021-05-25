import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDisciplinasPageRoutingModule } from './lista-disciplinas-routing.module';

import { ListaDisciplinasPage } from './lista-disciplinas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDisciplinasPageRoutingModule
  ],
  declarations: [ListaDisciplinasPage]
})
export class ListaDisciplinasPageModule {}
