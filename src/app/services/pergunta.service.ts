import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pergunta } from '../classes/pergunta';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {

  url = 'https://apoio-uniarp.herokuapp.com/questoes/';

  constructor(public http : HttpClient) {}

  gravar(pergunta : Pergunta) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'cadastrar', pergunta).subscribe(response => {
        resolve(response);
      })
    });
  }

  // gravar(pergunta:Pergunta){
    // console.log('PerguntaService- gravando pergunta')
    // let perguntas=this.listar()
    // perguntas.push(pergunta)
    // localStorage.setItem('perguntas', JSON.stringify(perguntas))
  // }

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
