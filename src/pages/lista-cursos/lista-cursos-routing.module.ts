import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCursosPage } from './lista-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCursosPageRoutingModule {}
