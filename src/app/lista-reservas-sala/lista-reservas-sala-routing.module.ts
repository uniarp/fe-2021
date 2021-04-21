import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaReservasSalaPage } from './lista-reservas-sala.page';

const routes: Routes = [
  {
    path: '',
    component: ListaReservasSalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaReservasSalaPageRoutingModule {}
