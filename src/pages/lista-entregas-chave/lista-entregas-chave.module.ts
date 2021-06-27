import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEntregasChavePageRoutingModule } from './lista-entregas-chave-routing.module';

import { ListaEntregasChavePage } from './lista-entregas-chave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEntregasChavePageRoutingModule
  ],
  declarations: [ListaEntregasChavePage]
})
export class ListaEntregasChavePageModule {}
