import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaIncidentesPageRoutingModule } from './lista-incidentes-routing.module';

import { ListaIncidentesPage } from './lista-incidentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaIncidentesPageRoutingModule
  ],
  declarations: [ListaIncidentesPage]
})
export class ListaIncidentesPageModule {}
