import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDisciplinaPage } from './lista-disciplina.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDisciplinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDisciplinaPageRoutingModule {}
