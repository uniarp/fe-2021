import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarEquipamentoPage } from './solicitar-equipamento.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarEquipamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarEquipamentoPageRoutingModule {}
