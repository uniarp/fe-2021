import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntregaChave } from '../classes/entrega-chave';
import { EntregaChaveService } from '../services/entrega-chave.service';
import { ProfessorService } from '../services/professor.service';

@Component({
  selector: 'app-cadastro-entrega-chave',
  templateUrl: './cadastro-entrega-chave.page.html',
  styleUrls: ['./cadastro-entrega-chave.page.scss'],
})
export class CadastroEntregaChavePage {

  entregasChave: EntregaChave;
  professores : any;

  constructor(
    public entregaChaveService : EntregaChaveService,
    public professorService : ProfessorService,
    public routerService : Router) {
  }

  ionViewDidEnter() {
    this.entregasChave = new EntregaChave();
    this.professorService.listar().subscribe(dados => {
      this.professores = dados;
    });
    
  }

  cadastrar() {
    this.entregaChaveService.cadastrar(this.entregasChave);
    this.routerService.navigate(['lista-chaves']);
  }

  cancelar() {
    this.entregasChave = null;
  }

  listar() {
    this.routerService.navigate(['lista-chaves']);
  }
  
  novo() {
    this.routerService.navigateByUrl('/cadastro-entrega-chave');
  }

}
