import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaSalasPage } from './lista-salas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaSalasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaSalasPageRoutingModule {}
