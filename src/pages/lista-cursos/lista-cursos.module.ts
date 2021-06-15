import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ListaCursosPageRoutingModule } from './lista-cursos-routing.module';

import { ListaCursosPage } from './lista-cursos.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCursosPageRoutingModule,
    Ng2SearchPipeModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListaCursosPage
      }
    ])
  ],
  declarations: [ListaCursosPage]
})
export class ListaCursosPageModule {}
