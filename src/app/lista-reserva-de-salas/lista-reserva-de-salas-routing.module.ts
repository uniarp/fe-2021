import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaReservaDeSalasPage } from './lista-reserva-de-salas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaReservaDeSalasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaReservaDeSalasPageRoutingModule {}
