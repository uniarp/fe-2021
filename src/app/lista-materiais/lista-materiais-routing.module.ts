import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaMateriaisPage } from './lista-materiais.page';

const routes: Routes = [
  {
    path: '',
    component: ListaMateriaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaMateriaisPageRoutingModule {}
