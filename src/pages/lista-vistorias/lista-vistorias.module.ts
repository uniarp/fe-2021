import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaVistoriasPageRoutingModule } from './lista-vistorias-routing.module';

import { ListaVistoriasPage } from './lista-vistorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaVistoriasPageRoutingModule
  ],
  declarations: [ListaVistoriasPage]
})
export class ListaVistoriasPageModule {}
