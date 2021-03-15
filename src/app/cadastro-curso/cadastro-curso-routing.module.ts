import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroCursoPage } from './cadastro-curso.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroCursoPageRoutingModule {}
