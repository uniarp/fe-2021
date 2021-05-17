import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaProfessoresPageRoutingModule } from './lista-professores-routing.module';

import { ListaProfessoresPage } from './lista-professores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaProfessoresPageRoutingModule
  ],
  declarations: [ListaProfessoresPage]
})
export class ListaProfessoresPageModule {}
