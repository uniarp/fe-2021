import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaIncidentesPage } from './lista-incidentes.page';

const routes: Routes = [
  {
    path: '',
    component: ListaIncidentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaIncidentesPageRoutingModule {}
