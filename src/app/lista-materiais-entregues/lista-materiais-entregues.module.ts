import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaMateriaisEntreguesPageRoutingModule } from './lista-materiais-entregues-routing.module';

import { ListaMateriaisEntreguesPage } from './lista-materiais-entregues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaMateriaisEntreguesPageRoutingModule
  ],
  declarations: [ListaMateriaisEntreguesPage]
})
export class ListaMateriaisEntreguesPageModule {}
