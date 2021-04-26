import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from '../material.service';
import { Material } from '../material/material';

@Component({
  selector: 'app-lista-entrega-material',
  templateUrl: './lista-entrega-material.page.html',
  styleUrls: ['./lista-entrega-material.page.scss'],
})
export class ListaEntregaMaterialPage  {

  tipoMaterial : any;

  constructor(
    public materialService:MaterialService,
    public routerService:Router
    ) { }


  ionViewWillEnter() {
    this.materialService.listarEntregas().subscribe(dados => {
      this.tipoMaterial = dados;
      console.log(this.tipoMaterial);
    });

  }
  novo() {
    this.routerService.navigateByUrl('/entregar-material');
  }
  alterar(id : Number, material : Material){
    this.materialService.alterar(id, material);
    console.log(this.alterar);
  }
  excluir(id : Number){
    this.materialService.excluir(id);
    console.log(this.excluir);
  }
}

