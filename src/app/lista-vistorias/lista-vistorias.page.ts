import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VistoriaService } from '../services/vistoria.service';

@Component({
  selector: 'app-lista-vistorias',
  templateUrl: './lista-vistorias.page.html',
  styleUrls: ['./lista-vistorias.page.scss'],
})
export class ListaVistoriasPage {

  vistoria : any;

  constructor(

    public vistoriaService : VistoriaService,
    public routerService : Router
  ) {this.vistoria = [] }

  novo() {
    this.routerService.navigateByUrl('cadastro-vistoria');
  }


  ionViewWillEnter() {
    this.vistoriaService.listar().subscribe(dados => {
      this.vistoria = dados;
      console.log(this.vistoria);
    })
  }
}
