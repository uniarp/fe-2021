import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastoFaqPage } from './cadasto-faq.page';

const routes: Routes = [
  {
    path: '',
    component: CadastoFaqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastoFaqPageRoutingModule {}
