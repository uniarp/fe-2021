import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEsperaSalaPage } from './lista-espera-sala.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEsperaSalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEsperaSalaPageRoutingModule {}
