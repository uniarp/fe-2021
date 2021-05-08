import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pergunta } from '../classes/pergunta';
import { PerguntaService } from '../../services/pergunta.service';

@Component({
  selector: 'app-adicionar-pergunta',
  templateUrl: './adicionar-pergunta.page.html',
  styleUrls: ['./adicionar-pergunta.page.scss'],
})
export class AdicionarPerguntaPage implements OnInit {
  pergunta:Pergunta={};
  constructor(
    private perguntaService:PerguntaService,
    private routeService:Router
  ) { }

  ngOnInit() {
  }

  cadastrar(pergunta:Pergunta){
    this.perguntaService.cadastrar(pergunta);
    this.routeService.navigateByUrl('/lista-pergunta')
  }

  cancelar(){
    this.routeService.navigateByUrl('/lista-pergunta')
  }
}
