import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaTipoEquipamentoPage } from './lista-tipo-equipamento.page';

const routes: Routes = [
  {
    path: '',
    component: ListaTipoEquipamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaTipoEquipamentoPageRoutingModule {}
