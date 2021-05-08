import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarSalasPageRoutingModule } from './buscar-salas-routing.module';

import { BuscarSalasPage } from './buscar-salas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarSalasPageRoutingModule
  ],
  declarations: [BuscarSalasPage]
})
export class BuscarSalasPageModule {}
