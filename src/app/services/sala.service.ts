import { Injectable } from '@angular/core';
import { Sala } from '../classes/sala';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SalaService {  
  
  url =  "https://apoio-uniarp.herokuapp.com/salas/"

  constructor(private http : HttpClient) { }

  /**
   * 
   * @param sala Objeto sala contendo os itens de cadastro
   * @returns 
   */
  cadastrar(sala : Sala) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'cadastrar', sala).subscribe(response=>{
          resolve(response);
        })
      });
  }

  alterar(id : Number, sala : Sala) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + sala.id + '/alterar', sala);
    })
  }

  /**
   * Listar Salas
   * @returns Lista de todas as salas em formato array
   */
  listar() {
    return this.http.get(this.url);   
  }
  
  /**
   * 
   * @param id 
   * @returns 
   */
  excluir(id : Number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + id + '/excluir');
    })
  }

}
