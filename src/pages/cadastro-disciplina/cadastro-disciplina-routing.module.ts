import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroDisciplinaPage } from './cadastro-disciplina.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroDisciplinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroDisciplinaPageRoutingModule {}
