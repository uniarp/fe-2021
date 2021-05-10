import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaMateriaisPageRoutingModule } from './lista-materiais-routing.module';

import { ListaMateriaisPage } from './lista-materiais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaMateriaisPageRoutingModule
  ],
  declarations: [ListaMateriaisPage]
})
export class ListaMateriaisPageModule {}
