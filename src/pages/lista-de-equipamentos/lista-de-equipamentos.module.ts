import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDeEquipamentosPageRoutingModule } from './lista-de-equipamentos-routing.module';

import { ListaDeEquipamentosPage } from './lista-de-equipamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDeEquipamentosPageRoutingModule
  ],
  declarations: [ListaDeEquipamentosPage]
})
export class ListaDeEquipamentosPageModule {}
