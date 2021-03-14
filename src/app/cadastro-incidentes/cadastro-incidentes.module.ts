import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroIncidentesPageRoutingModule } from './cadastro-incidentes-routing.module';

import { CadastroIncidentesPage } from './cadastro-incidentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroIncidentesPageRoutingModule
  ],
  declarations: [CadastroIncidentesPage]
})
export class CadastroIncidentesPageModule {}
