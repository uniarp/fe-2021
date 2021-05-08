import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoEquipamento } from '../model/tipo-equipamento';

@Injectable({
  providedIn: 'root'
})

export class TipoEquipamentoService {

  url = 'https://apoio-uniarp.herokuapp.com/tiposEquipamento/';

  constructor(public http : HttpClient) {}

  cadastrar(tipoEquipamento : TipoEquipamento) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'cadastrar', tipoEquipamento).subscribe(response => {
        resolve(response);
      })
    });
  }

  alterar(id : Number, tipoEquipamento : TipoEquipamento) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + id + '/alterar', tipoEquipamento);
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
