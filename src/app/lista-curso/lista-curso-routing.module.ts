import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCursoPage } from './lista-curso.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCursoPageRoutingModule {}
