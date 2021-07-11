import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservaSala } from '../model/reserva-sala';

@Injectable({
  providedIn: 'root'
})
export class ReservaSalaService {

  url = 'https://apoio-uniarp.herokuapp.com/reservasSala/';
  
  constructor(public http: HttpClient) { }

  cadastrar(reservaSala: ReservaSala) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'cadastrar', reservaSala).subscribe(response => {
        resolve(response);
      })
    });
  }

  alterar(id: Number, reservaSala: ReservaSala) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + id + '/alterar', reservaSala);
    });
  }

  listar() {
    return this.http.get(this.url);
  }

  excluir(id: number) {
    return this.http.delete(this.url + id + '/excluir'); 
  }

  buscar(id: Number) {
    return this.http.get(this.url + id + '/buscar');
  }

  listaSolicitada() {
    return this.http.get(this.url + 'solicitada')
  }
}
