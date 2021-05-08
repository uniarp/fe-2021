import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipamento } from '../classes/equipamento';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  url = 'https://apoio-uniarp.herokuapp.com/equipamentos/';

  constructor(public http : HttpClient) {}

  /* Em testes, sujeito a modificações
  */
  cadastrar(equipamento : Equipamento) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'cadastrar', equipamento).subscribe(response => {
        resolve(response);
      })
    });
  }

  alterar(id : Number, equipamento : Equipamento) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + id + '/alterar', equipamento);
    });
  }

  listar() {
    return this.http.get(this.url);
  }

  excluir(id : Number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + id + '/excluir');
    });
  }

}

