import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from '../material.service';
import { Material } from '../material/material';

@Component({
  selector: 'app-entregar-material',
  templateUrl: './entregar-material.page.html',
  styleUrls: ['./entregar-material.page.scss'],
})
export class EntregarMaterialPage {

  material: Material;

  constructor(public materialService:MaterialService,
    public routerService:Router) {
  }

  ionViewDidEnter(){
    console.log('cadastro Material page - iondidviewENTER');
    //instanciando  objeto da classe que vou cadastrari
    this.material = new Material();
  }

  gravar(){
    console.log('Cadastro Material - gravar ');
    //passar a equipamento que esta sendo cadastrada
    this.materialService.cadastrar(this.material);
    this.routerService.navigate(['lista-entrega-material']);
  }

  listar(){
    console.log('Cadastro Material - listar');
    this.routerService.navigate(['lista-entrega-material']);
  }

  novo() {
    this.routerService.navigateByUrl('/cadastro-material')
  }
}
