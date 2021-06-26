import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaProfessorPage } from './lista-professor.page';

const routes: Routes = [
  {
    path: '',
    component: ListaProfessorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaProfessorPageRoutingModule {}
