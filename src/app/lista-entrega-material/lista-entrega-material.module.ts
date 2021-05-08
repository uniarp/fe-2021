import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEntregaMaterialPageRoutingModule } from './lista-entrega-material-routing.module';

import { ListaEntregaMaterialPage } from './lista-entrega-material.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEntregaMaterialPageRoutingModule
  ],
  declarations: [ListaEntregaMaterialPage]
})
export class ListaEntregaMaterialPageModule {}
