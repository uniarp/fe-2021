import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDisciplinasPage } from './lista-disciplinas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDisciplinasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDisciplinasPageRoutingModule {}
