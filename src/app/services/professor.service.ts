import { Injectable } from '@angular/core';
import { Professor } from '../classes/professor';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  backEnd:string='https://apoio-uniarp.herokuapp.com/professores'
  constructor( 
    private http:HttpClient,
  ) { }
  
  cadastrar(professor: Professor){
    console.log(professor)
   return this.http.post(this.backEnd+'/cadastrar', professor)
  }

  alterar(professor: Professor){
    return new Promise((resolve, reject) => {
      this.http.post(this.backEnd + professor.id + '/alterar', professor)
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
