import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDeCursosPageRoutingModule } from './lista-de-cursos-routing.module';

import { ListaDeCursosPage } from './lista-de-cursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDeCursosPageRoutingModule
  ],
  declarations: [ListaDeCursosPage]
})
export class ListaDeCursosPageModule {}
