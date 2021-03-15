import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDeSalasPageRoutingModule } from './lista-de-salas-routing.module';

import { ListaDeSalasPage } from './lista-de-salas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDeSalasPageRoutingModule
  ],
  declarations: [ListaDeSalasPage]
})
export class ListaDeSalasPageModule {}
