import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroVistoriaPage } from './cadastro-vistoria.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroVistoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroVistoriaPageRoutingModule {}
