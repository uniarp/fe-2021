import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaVistoriasPage } from './lista-vistorias.page';

const routes: Routes = [
  {
    path: '',
    component: ListaVistoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaVistoriasPageRoutingModule {}
