import { Injectable } from '@angular/core';
import { Sala } from '../classes/sala';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SalaService {  
  sala:Sala
  backend: string = "https://apoio-uniarp.herokuapp.com/"

  constructor(private http:HttpClient) { }

  cadastrar(sala:Sala){
    console.log("cadastro de sala")
  }
  alterar(        
    sala:Sala
  ){
    console.log("alteração de sala")
    //this.routerService.navigate(['listarTodos']);
  }
  excluir(id:number){

    console.log("excluindo sala")
  }
  listarTodos(){
    console.log("listando todas as salas")
    return this.http.get(this.backend+'salas')   
  }
  
  setSala(sala:Sala){
    this.sala=sala
    console.log(this.sala, "sala")
  }

  getSala(){
    return this.sala
  }
 
}
