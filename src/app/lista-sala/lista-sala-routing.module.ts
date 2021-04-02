import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaSalaPage } from './lista-sala.page';

const routes: Routes = [
  {
    path: '',
    component: ListaSalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaSalaPageRoutingModule {}
