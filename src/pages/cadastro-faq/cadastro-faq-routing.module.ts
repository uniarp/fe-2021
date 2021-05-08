import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroFaqPage } from './cadastro-faq.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroFaqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroFaqPageRoutingModule {}
