import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEntregasChavePageRoutingModule } from './lista-entregas-chave-routing.module';

import { ListaEntregasChavePage } from './lista-entregas-chave.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    IonicModule,
    ListaEntregasChavePageRoutingModule
  ],
  declarations: [ListaEntregasChavePage]
})
export class ListaEntregasChavePageModule {}
