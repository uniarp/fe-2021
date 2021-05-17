import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disciplina } from '../classes/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  backEnd:string='https://apoio-uniarp.herokuapp.com/disciplinas'
  constructor( 
    private http:HttpClient,
  ) { }

  cadastrar(disciplina: Disciplina){
    console.log(disciplina)
   return this.http.post(this.backEnd+'/cadastrar', disciplina)
  }

  alterar(disciplina: Disciplina){
    return new Promise((resolve, reject) => {
      this.http.post(this.backEnd + disciplina.id + '/alterar', disciplina)
    })
  }

  excluir(id:string){
    return new Promise((resolve, reject) => {
      this.http.get(this.backEnd + id + '/excluir')
    })
  } 

  listar(){
    return this.http.get(this.backEnd)
  }
}
