import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChaveService } from '../../services/chave.service';

@Component({
  selector: 'app-lista-chaves',
  templateUrl: './lista-chaves.page.html',
  styleUrls: ['./lista-chaves.page.scss'],
})
export class ListaChavesPage {

  chaves : any;

  constructor(public chaveService : ChaveService, public routerService : Router) {
  }

  novo() {
    this.routerService.navigateByUrl('/cadastro-chave');
  }

  ionViewWillEnter() {
    this.chaves = [];
    this.chaveService.listar().subscribe(dados => {
      this.chaves = dados;
    });
  }

  cadastrarEntregaChave() {
    this.routerService.navigateByUrl('/cadastro-entrega-chave');
  }

  devolverEntregaChave() {
    console.log('devolvendo');
  }
}
