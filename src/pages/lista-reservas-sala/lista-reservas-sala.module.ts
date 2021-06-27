import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ListaReservasSalaPageRoutingModule } from './lista-reservas-sala-routing.module';

import { ListaReservasSalaPage } from './lista-reservas-sala.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaReservasSalaPageRoutingModule,
    Ng2SearchPipeModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListaReservasSalaPage
      }
    ])
  ],
  declarations: [ListaReservasSalaPage]
})
export class ListaReservasSalaPageModule {}

