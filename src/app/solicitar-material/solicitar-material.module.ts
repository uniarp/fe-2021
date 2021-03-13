import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarMaterialPageRoutingModule } from './solicitar-material-routing.module';

import { SolicitarMaterialPage } from './solicitar-material.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarMaterialPageRoutingModule
  ],
  declarations: [SolicitarMaterialPage]
})
export class SolicitarMaterialPageModule {}
