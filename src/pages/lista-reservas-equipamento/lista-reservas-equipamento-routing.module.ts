import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaReservasEquipamentoPage } from './lista-reservas-equipamento.page';

const routes: Routes = [
  {
    path: '',
    component: ListaReservasEquipamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaReservasEquipamentoPageRoutingModule {}
