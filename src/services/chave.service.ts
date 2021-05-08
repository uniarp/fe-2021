import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chave } from '../app/classes/chave';

@Injectable({
  providedIn: 'root'
})
export class ChaveService {

  url = 'https://apoio-uniarp.herokuapp.com/chaves/';

  constructor(public http : HttpClient) {}

  /* Em testes, sujeito a modificações
  */
  cadastrar(chave : Chave) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'cadastrar', chave).subscribe(response => {
        resolve(response);
      })
    });
  }

  alterar(id : Number, chave : Chave) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + id + '/alterar', chave);
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
