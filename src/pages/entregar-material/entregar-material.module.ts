import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntregarMaterialPageRoutingModule } from './entregar-material-routing.module';

import { EntregarMaterialPage } from './entregar-material.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregarMaterialPageRoutingModule
  ],
  declarations: [EntregarMaterialPage]
})
export class EntregarMaterialPageModule {}
