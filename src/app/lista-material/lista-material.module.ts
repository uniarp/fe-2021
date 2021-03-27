import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaMaterialPageRoutingModule } from './lista-material-routing.module';

import { ListaMaterialPage } from './lista-material.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaMaterialPageRoutingModule
  ],
  declarations: [ListaMaterialPage]
})
export class ListaMaterialPageModule {}
