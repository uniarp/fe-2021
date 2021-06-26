import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarPerguntaPage } from './adicionar-pergunta.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarPerguntaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarPerguntaPageRoutingModule {}
