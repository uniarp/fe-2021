import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroChavePage } from './cadastro-chave.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroChavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroChavePageRoutingModule {}
