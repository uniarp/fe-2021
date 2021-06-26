import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaProfessorPageRoutingModule } from './lista-professor-routing.module';

import { ListaProfessorPage } from './lista-professor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaProfessorPageRoutingModule
  ],
  declarations: [ListaProfessorPage]
})
export class ListaProfessorPageModule {}
