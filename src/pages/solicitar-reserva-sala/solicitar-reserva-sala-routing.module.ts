import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarReservaSalaPage } from './solicitar-reserva-sala.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarReservaSalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarReservaSalaPageRoutingModule {}
