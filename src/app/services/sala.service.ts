import { Injectable } from '@angular/core';
import { Sala } from '../classes/sala';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SalaService {  
  sala:Sala
  backend: string = "https://apoio-uniarp.herokuapp.com/salas/"

  constructor(private http:HttpClient) { }

  cadastrar(sala:Sala){
    console.log("cadastro de sala",sala)
    return new Promise((resolve, reject) => {
    this.http.post(this.backend + 'cadastrar', sala).subscribe(response=>{
      resolve(response);
      console.log(response, "Ver")})
    });

  }
  alterar(        
    sala:Sala
  ){
    console.log("alteração de sala");
    return new Promise((resolve, reject) => {
    this.http.post(this.backend + sala.id + '/alterar', sala)
    })
    //this.routerService.navigate(['listarTodos']);
 }
  excluir(id:number){
    console.log("excluindo sala")
    return new Promise((resolve, reject) => {
    this.http.get(this.backend + id + '/excluir')
    })

  }
  listarTodos(){
    console.log("listando todas as salas")
    return this.http.get(this.backend)   
  }
  
  setSala(sala:Sala){
    this.sala=sala
    console.log(this.sala, "sala")
  }

  getSala(){
    return this.sala
  }
 
}
