import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaIncidentesResolvidosPage } from './lista-incidentes-resolvidos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaIncidentesResolvidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaIncidentesResolvidosPageRoutingModule {}
