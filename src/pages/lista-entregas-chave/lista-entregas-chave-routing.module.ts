import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEntregasChavePage } from './lista-entregas-chave.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEntregasChavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEntregasChavePageRoutingModule {}
