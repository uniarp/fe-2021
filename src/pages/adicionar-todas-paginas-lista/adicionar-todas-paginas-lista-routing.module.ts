import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarTodasPaginasListaPage } from './adicionar-todas-paginas-lista.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarTodasPaginasListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarTodasPaginasListaPageRoutingModule {}
