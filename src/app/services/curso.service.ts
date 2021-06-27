import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../classes/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  backEnd:string='https://apoio-uniarp.herokuapp.com/cursos/'
  constructor( 
    private http:HttpClient,
  ) { }
  
  cadastrar(curso: Curso){
    console.log(curso)
   return this.http.post(this.backEnd+'/cadastrar', curso)
  }

  alterar(curso: Curso){
    return new Promise((resolve, reject) => {
      this.http.post(this.backEnd + curso.id + '/alterar', curso)
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
