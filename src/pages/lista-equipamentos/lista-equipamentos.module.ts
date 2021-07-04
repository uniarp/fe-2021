import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEquipamentosPageRoutingModule } from './lista-equipamentos-routing.module';

import { ListaEquipamentosPage } from './lista-equipamentos.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    IonicModule,
    ListaEquipamentosPageRoutingModule
  ],
  declarations: [ListaEquipamentosPage]
})
export class ListaEquipamentosPageModule {}
