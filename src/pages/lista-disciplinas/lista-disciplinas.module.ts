import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDisciplinasPageRoutingModule } from './lista-disciplinas-routing.module';

import { ListaDisciplinasPage } from './lista-disciplinas.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    IonicModule,
    ListaDisciplinasPageRoutingModule
  ],
  declarations: [ListaDisciplinasPage]
})
export class ListaDisciplinasPageModule {}
