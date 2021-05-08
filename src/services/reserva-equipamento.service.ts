import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservaEquipamento } from '../app/classes/reserva-equipamento';

@Injectable({
  providedIn: 'root'
})
export class ReservaEquipamentoService {

  url = 'https://apoio-uniarp.herokuapp.com/reservasEquipamento/';

  constructor(public http : HttpClient) {}

  /* Em testes, sujeito a modificações
  */
  cadastrar(reservaEquipamento : ReservaEquipamento) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'cadastrar', reservaEquipamento).subscribe(response => {
        resolve(response);
      })
    });
  }

  alterar(id : Number, reservaEquipamento : ReservaEquipamento) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + id + 'alterar', reservaEquipamento);
    });
  }

  listar() {
    return this.http.get(this.url);
  }

  excluir(id : Number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + id + 'excluir');
    });
  }
}
