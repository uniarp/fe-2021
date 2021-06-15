import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ListaReservasEquipamentoPageRoutingModule } from './lista-reservas-equipamento-routing.module';

import { ListaReservasEquipamentoPage } from './lista-reservas-equipamento.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaReservasEquipamentoPageRoutingModule,
    Ng2SearchPipeModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListaReservasEquipamentoPage
      }
    ])
  ],
  declarations: [ListaReservasEquipamentoPage]
})
export class ListaReservasEquipamentoPageModule {}
