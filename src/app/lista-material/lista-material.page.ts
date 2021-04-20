import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from '../material.service';
import { Material } from '../material/material';

@Component({
  selector: 'app-lista-material',
  templateUrl: './lista-material.page.html',
  styleUrls: ['./lista-material.page.scss'],
})
export class ListaMaterialPage{

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
