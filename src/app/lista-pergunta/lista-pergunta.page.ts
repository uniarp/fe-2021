import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pergunta } from '../classes/pergunta';
import { PerguntaService } from '../services/pergunta.service';

@Component({
  selector: 'app-lista-pergunta',
  templateUrl: './lista-pergunta.page.html',
  styleUrls: ['./lista-pergunta.page.scss'],
})
export class ListaPerguntaPage{
  perguntas:any;

    constructor(
      private routeService:Router,
      private perguntaService:PerguntaService
    ) { }

    ionViewDidEnter() {
     this.perguntas = [];
      this.perguntaService.listar().subscribe(dados => {
        this.perguntas = dados;
        console.log(this.perguntas);
      });
    }



  novo() {
    this.routeService.navigateByUrl('/cadastro-faq')
  }

  editar(pergunta:Pergunta) {
    this.perguntaService.alterar(pergunta)
  }

  excluir(pergunta:Pergunta) {
    this.perguntaService.excluir(pergunta)
  }
}
