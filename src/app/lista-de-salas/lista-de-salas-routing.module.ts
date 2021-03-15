import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDeSalasPage } from './lista-de-salas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeSalasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDeSalasPageRoutingModule {}
