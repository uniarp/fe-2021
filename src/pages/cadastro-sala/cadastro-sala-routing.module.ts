import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroSalaPage } from './cadastro-sala.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroSalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroSalaPageRoutingModule {}
