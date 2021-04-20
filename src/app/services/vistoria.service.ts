import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vistoria } from '../classes/vistoria';

@Injectable({
  providedIn: 'root'
})
export class VistoriaService {

  url = 'https://apoio-uniarp.herokuapp.com/vistorias/';

  constructor(public http : HttpClient) {}

  /* Em testes, sujeito a modificações
  */
  cadastrar(vistoria : Vistoria) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'cadastrar', Vistoria).subscribe(response => {
        resolve(response);
      })
    });
  }

  alterar(id : Number, vistoria : Vistoria) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + id + '/alterar', vistoria);
    });
  }

  listar(){
    return this.http.get(this.url);
  }

  excluir(id : Number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + id + '/excluir');
    });
  }
}
