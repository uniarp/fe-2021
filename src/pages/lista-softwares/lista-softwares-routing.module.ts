import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaSoftwaresPage } from './lista-softwares.page';

const routes: Routes = [
  {
    path: '',
    component: ListaSoftwaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaSoftwaresPageRoutingModule {}
