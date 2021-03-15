import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaReservaEquipamentosPage } from './lista-reserva-equipamentos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaReservaEquipamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaReservaEquipamentosPageRoutingModule {}
