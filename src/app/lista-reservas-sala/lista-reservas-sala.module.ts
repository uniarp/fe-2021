import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaReservasSalaPageRoutingModule } from './lista-reservas-sala-routing.module';

import { ListaReservasSalaPage } from './lista-reservas-sala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaReservasSalaPageRoutingModule
  ],
  declarations: [ListaReservasSalaPage]
})
export class ListaReservasSalaPageModule {}
