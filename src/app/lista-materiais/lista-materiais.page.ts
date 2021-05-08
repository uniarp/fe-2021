import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from '../services/material.service';

@Component({
  selector: 'app-lista-material',
  templateUrl: './lista-materiais.page.html',
  styleUrls: ['./lista-materiais.page.scss'],
})
export class ListaMateriaisPage{

  materiais : any;

  constructor(
    public materialService:MaterialService,
    public routerService:Router
    ) { }
    ngOnInit(){
      this.materiais = [];
    }
  novo() {
    this.routerService.navigateByUrl('/cadastro-material');
  }

  ionViewWillEnter() {
    this.materiais = [];
     this.materialService.listar().subscribe(dados => {
       this.materiais = dados;
       console.log(this.materiais);
     });
   }
}
