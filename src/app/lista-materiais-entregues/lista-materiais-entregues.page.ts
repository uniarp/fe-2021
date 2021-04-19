import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from '../material.service';
import { Material } from '../material/material';

@Component({
  selector: 'app-lista-materiais-entregues',
  templateUrl: './lista-materiais-entregues.page.html',
  styleUrls: ['./lista-materiais-entregues.page.scss'],
})
export class ListaMateriaisEntreguesPage{
  materiais: any;
  constructor(
    private routeService:Router,
    private materialService:MaterialService
  ) { }

  ionViewDidEnter() {
    this.materiais = [];
     this.materialService.listar().subscribe(dados => {
       this.materiais = dados;
       console.log(this.materiais);
     });
   }
   novo() {
    this.routeService.navigateByUrl('/cadastro-faq')
  }

  editar(material:Material) {
  //  this.materialService.alterar(material)
  }

  excluir(material:Material) {
   // this.materialService.excluir(material)
  }
}

