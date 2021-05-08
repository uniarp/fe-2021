import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaChavesPageRoutingModule } from './lista-chaves-routing.module';

import { ListaChavesPage } from './lista-chaves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaChavesPageRoutingModule
  ],
  declarations: [ListaChavesPage]
})
export class ListaChavesPageModule {}
