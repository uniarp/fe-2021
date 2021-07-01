import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntregaChaveService } from 'src/services/entrega-chave.service';

@Component({
  selector: 'app-lista-entregas-chave',
  templateUrl: './lista-entregas-chave.page.html',
  styleUrls: ['./lista-entregas-chave.page.scss'],
})
export class ListaEntregasChavePage {
  pesquisa = '';
  entregasChave : any;

  constructor(private routeService : Router, private entregasChaveService : EntregaChaveService) {
  }

  ionViewDidEnter() {
    this.entregasChave = [];
    this.entregasChaveService.listar().subscribe(dados => {
      console.log(dados);
      this.entregasChave = dados;
    });
  }

  novo() {
    this.routeService.navigateByUrl('/cadastro-entrega-chave');
  }
  
}
