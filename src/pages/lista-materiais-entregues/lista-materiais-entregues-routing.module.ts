import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaMateriaisEntreguesPage } from './lista-materiais-entregues.page';

const routes: Routes = [
  {
    path: '',
    component: ListaMateriaisEntreguesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaMateriaisEntreguesPageRoutingModule {}
