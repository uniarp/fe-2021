import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroMaterialPage } from './cadastro-material.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroMaterialPageRoutingModule {}
