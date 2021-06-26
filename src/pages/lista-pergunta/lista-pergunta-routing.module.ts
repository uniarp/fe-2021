import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPerguntaPage } from './lista-pergunta.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPerguntaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPerguntaPageRoutingModule {}
