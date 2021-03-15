import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarReservaSalasPage } from './solicitar-reserva-salas.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarReservaSalasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarReservaSalasPageRoutingModule {}
