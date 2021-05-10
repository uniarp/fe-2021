import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEntregaMaterialPage } from './lista-entrega-material.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEntregaMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEntregaMaterialPageRoutingModule {}
