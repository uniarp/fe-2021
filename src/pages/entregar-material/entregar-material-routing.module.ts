import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntregarMaterialPage } from './entregar-material.page';

const routes: Routes = [
  {
    path: '',
    component: EntregarMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregarMaterialPageRoutingModule {}
