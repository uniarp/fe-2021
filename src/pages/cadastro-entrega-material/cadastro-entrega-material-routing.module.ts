import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroEntregaMaterialPage } from './cadastro-entrega-material.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroEntregaMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroEntregaMaterialPageRoutingModule {}
