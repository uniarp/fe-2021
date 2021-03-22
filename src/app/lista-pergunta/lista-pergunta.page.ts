import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pergunta } from '../classes/pergunta';
import { PerguntaService } from '../services/pergunta.service';

@Component({
  selector: 'app-lista-pergunta',
  templateUrl: './lista-pergunta.page.html',
  styleUrls: ['./lista-pergunta.page.scss'],
})
export class ListaPerguntaPage implements OnInit {
  perguntas:Pergunta[];

  constructor(
    private routeService:Router,
    private perguntaService:PerguntaService
  ) { }

  ngOnInit() {
  }
  
  ionViewWillEnter(){
    this.perguntas=this.perguntaService.listar();
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
