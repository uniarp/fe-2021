import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disciplina } from '../model/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

<<<<<<< HEAD
  backEnd:string='https://apoio-uniarp.herokuapp.com/disciplinas'
  constructor( 
    private http:HttpClient,
  ) { }

  cadastrar(disciplina:any){
    disciplina.diasemana=disciplina.diasemana.map(dia=>parseInt(dia))
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
=======
  url = "https://apoio-uniarp.herokuapp.com/disciplinas";

  constructor(private http:HttpClient) {
  }

  cadastrar(disciplina : any){
    disciplina.diaSemana=disciplina.diaSemana.map(dia=>parseInt(dia));
    return new Promise((resolve, reject) => {
      this.http.post(this.url +'/cadastrar', disciplina).subscribe(response => {
        resolve(response);
      })
    });
  }

  alterar(disciplina: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + disciplina.id + '/alterar', disciplina);
    })
  }

  excluir(id:string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + id + '/excluir');
    })
  } 

  listar() {
    return this.http.get(this.url);
>>>>>>> origin
  }
}