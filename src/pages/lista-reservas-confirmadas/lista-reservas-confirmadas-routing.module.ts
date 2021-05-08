import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaReservasConfirmadasPage } from './lista-reservas-confirmadas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaReservasConfirmadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaReservasConfirmadasPageRoutingModule {}
