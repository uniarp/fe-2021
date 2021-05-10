import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroTipoEquipamentoPage } from './cadastro-tipo-equipamento.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroTipoEquipamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroTipoEquipamentoPageRoutingModule {}
