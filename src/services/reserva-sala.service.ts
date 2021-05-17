import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservaSala } from '../model/reserva-sala';

@Injectable({
  providedIn: 'root'
})
export class ReservaSalaService {

  url = 'https://apoio-uniarp.herokuapp.com/reservasSala/';

  constructor(public http : HttpClient) { }

  /**
   * 
   * @param reservaSala 
   * @returns 
   */
  cadastrar(reservaSala : ReservaSala) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'cadastrar', reservaSala).subscribe(response => {
        resolve(response);
      })
    });
  }

  /**
   * 
   * @param id 
   * @param reservaSala 
   * @returns 
   */
  alterar(id : Number, reservaSala : ReservaSala) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + id + '/alterar', reservaSala);
    });
  }

  /**
   * 
   * @returns 
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
    });
  }
  
  listaSolicitada(){
    return this.http.get(this.url+'solicitada')
  }
}
