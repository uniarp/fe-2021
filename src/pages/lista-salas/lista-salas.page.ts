import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalaService } from '../../services/sala.service';

@Component({
  selector: 'app-lista-salas',
  templateUrl: './lista-salas.page.html',
  styleUrls: ['./lista-salas.page.scss'],
})
export class ListaSalasPage  {
  
  salas : any;

  constructor(public salaService:SalaService, public routerService:Router) {
  }
  
  ngOnInit() {
    this.salas = [];
  }

  ionViewWillEnter() {
    this.salas = [];
      this.salaService.listar().subscribe(dados => {
        this.salas = dados;
        console.log(this.salas);
      });
  }

  novo() {
    this.routerService.navigateByUrl('/cadastro-sala');
  }

  excluir() {

  }

  alterar() {

  }
}
