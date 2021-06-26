import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroIncidentePageRoutingModule } from './cadastro-incidente-routing.module';

import { CadastroIncidentePage } from './cadastro-incidente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroIncidentePageRoutingModule
  ],
  declarations: [CadastroIncidentePage]
})
export class CadastroIncidentePageModule {}
