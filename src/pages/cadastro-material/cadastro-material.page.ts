import { Component, OnInit } from '@angular/core';
import { Material } from '../../model/material';
import { MaterialService } from '../../services/material.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cadastro-material',
  templateUrl: './cadastro-material.page.html',
  styleUrls: ['./cadastro-material.page.scss'],
})
export class CadastroMaterialPage {

  material: Material;

  constructor(public materialService: MaterialService,
    public routerService: Router) {
  }

  ionViewDidEnter() {
    console.log('cadastro Material page - iondidviewENTER');
    //instanciando  objeto da classe que vou cadastrari
    this.material = new Material();
  }
 
  cadastrar() {
    this.materialService.cadastrar(this.material).then(() => {
      this.routerService.navigate(['lista-materiais']);
    });
  }

  cancelar() {
    console.log('CadastrarMaterial - cancelar');
    this.routerService.navigateByUrl('/home')
  }

  listar() {
    this.routerService.navigate(['lista-material']);
  }

  novo() {
    this.routerService.navigateByUrl('/cadastro-material')
  }
}
