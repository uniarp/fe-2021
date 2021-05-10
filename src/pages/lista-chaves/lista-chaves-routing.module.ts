import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaChavesPage } from './lista-chaves.page';

const routes: Routes = [
  {
    path: '',
    component: ListaChavesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaChavesPageRoutingModule {}
