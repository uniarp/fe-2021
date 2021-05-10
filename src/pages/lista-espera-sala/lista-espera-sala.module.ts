import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEsperaSalaPageRoutingModule } from './lista-espera-sala-routing.module';

import { ListaEsperaSalaPage } from './lista-espera-sala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEsperaSalaPageRoutingModule
  ],
  declarations: [ListaEsperaSalaPage]
})
export class ListaEsperaSalaPageModule {}
