import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroSoftwarePage } from './cadastro-software.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroSoftwarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroSoftwarePageRoutingModule {}
