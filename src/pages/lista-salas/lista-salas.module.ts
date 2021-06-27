import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaSalasPageRoutingModule } from './lista-salas-routing.module';

import { ListaSalasPage } from './lista-salas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaSalasPageRoutingModule
  ],
  declarations: [ListaSalasPage]
})
export class ListaSalasPageModule {}
