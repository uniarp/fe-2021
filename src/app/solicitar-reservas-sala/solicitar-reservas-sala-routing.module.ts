import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarReservasSalaPage } from './solicitar-reservas-sala.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarReservasSalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarReservasSalaPageRoutingModule {}
