import { Injectable } from '@angular/core';
import { Pergunta } from '../classes/pergunta';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {

  constructor() { }
  
  gravar(pergunta:Pergunta){
    console.log('PerguntaService- gravando pergunta')
    let perguntas=this.listar()
    perguntas.push(pergunta)
    localStorage.setItem('perguntas', JSON.stringify(perguntas))
  }

  listar():Pergunta[]{
    console.log('PerguntaService- Listando as perguntas')
    let perguntas=[];
    if(localStorage.getItem('perguntas')){
      perguntas=JSON.parse(localStorage.getItem('perguntas'))
    }
    return perguntas
  }

  excluir(pergunta:Pergunta){
    console.log('PerguntaService- Excluindo:',pergunta.pergunta)
  }

  alterar(pergunta:Pergunta){
    console.log('PerguntaService- Alterando pergunta:',pergunta.pergunta)
  }
}
