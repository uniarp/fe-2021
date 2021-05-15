import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDeCursosPage } from './lista-de-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDeCursosPageRoutingModule {}
