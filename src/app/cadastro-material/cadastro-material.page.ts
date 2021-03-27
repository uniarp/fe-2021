import { Component, OnInit } from '@angular/core';
import { Material } from '../material/material';
import { MaterialService } from '../material.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cadastro-material',
  templateUrl: './cadastro-material.page.html',
  styleUrls: ['./cadastro-material.page.scss'],
})
export class CadastroMaterialPage {

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
    this.materialService.gravar(this.material);
    this.routerService.navigate(['lista-material']);
  }

  cancelar(){
    console.log('CadastrarMaterial - cancelar');
    this.material.nome = null;
    this.material.quantidade = null;
    this.material.id = null;
    this.material.descricao = null;
    this.material.marca = null;
  }

  listar(){
    console.log('Cadastro Material - listar');
    this.routerService.navigate(['lista-material']);
  }

  novo() {
    this.routerService.navigateByUrl('/cadastro-material')
  }
}
