import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entrega } from '../model/entrega';
@Injectable({
  providedIn: 'root'
})
export class EntregaService {

  url = 'https://apoio-uniarp.herokuapp.com/entregas/';

  constructor(private http : HttpClient) { }

  cadastrar(entrega : Entrega) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'cadastrar', entrega).subscribe(response => {
        resolve(response);
      })
    });
  }

  alterar(id : Number, entrega : Entrega) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + id + '/alterar', entrega);
    });
  }

  excluir(id : Number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + id + '/excluir');
    });
  }

  listar() {
    return this.http.get(this.url);
  }

}
