import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDeEquipamentosPage } from './lista-de-equipamentos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeEquipamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDeEquipamentosPageRoutingModule {}
