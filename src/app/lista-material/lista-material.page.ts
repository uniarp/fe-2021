import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-lista-material',
  templateUrl: './lista-material.page.html',
  styleUrls: ['./lista-material.page.scss'],
})
export class ListaMaterialPage{

  material : any;

  constructor(
    public materialService:MaterialService,
    public routerService:Router
    ) { }

  novo() {
    this.routerService.navigateByUrl('/cadastro-material');
  }

  ionViewWillEnter() {
    this.materialService.listar().subscribe(dados => {
      this.material = dados;
      console.log(this.material);
    });
  }

}
