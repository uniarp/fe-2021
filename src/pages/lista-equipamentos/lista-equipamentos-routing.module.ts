import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEquipamentosPage } from './lista-equipamentos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEquipamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEquipamentosPageRoutingModule {}
