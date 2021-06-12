import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEntregasMaterialPageRoutingModule } from './lista-entregas-material-routing.module';

import { ListaEntregasMaterialPage } from './lista-entregas-material.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEntregasMaterialPageRoutingModule
  ],
  declarations: [ListaEntregasMaterialPage]
})
export class ListaEntregasMaterialPageModule {}
