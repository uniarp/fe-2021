import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaIncidentesResolvidosPageRoutingModule } from './lista-incidentes-resolvidos-routing.module';

import { ListaIncidentesResolvidosPage } from './lista-incidentes-resolvidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaIncidentesResolvidosPageRoutingModule
  ],
  declarations: [ListaIncidentesResolvidosPage]
})
export class ListaIncidentesResolvidosPageModule {}
