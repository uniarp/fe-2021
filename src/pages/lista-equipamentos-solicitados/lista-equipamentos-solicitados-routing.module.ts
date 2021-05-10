import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEquipamentosSolicitadosPage } from './lista-equipamentos-solicitados.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEquipamentosSolicitadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEquipamentosSolicitadosPageRoutingModule {}
