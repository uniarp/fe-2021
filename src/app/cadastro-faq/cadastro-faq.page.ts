import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pergunta } from '../classes/pergunta';
import { PerguntaService } from '../services/pergunta.service';

@Component({
  selector: 'app-cadastro-faq',
  templateUrl: './cadastro-faq.page.html',
  styleUrls: ['./cadastro-faq.page.scss'],
})
export class CadastroFaqPage {
  pergunta:Pergunta;
  constructor(
    private perguntaService:PerguntaService,
    private routeService:Router
  ) { }
  ionViewDidEnter(){
  this.pergunta=new Pergunta();
  }

  gravar(pergunta:Pergunta){
    this.perguntaService.gravar(this.pergunta);
    this.routeService.navigateByUrl('/lista-pergunta')
  }

  cancelar(){
    this.routeService.navigateByUrl('/lista-pergunta')
  }
}
