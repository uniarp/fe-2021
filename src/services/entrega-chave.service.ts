import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntregaChave } from '../model/entrega-chave';

@Injectable({
  providedIn: 'root'
})
export class EntregaChaveService {

  url = 'https://apoio-uniarp.herokuapp.com/entregasChave/';

  constructor(public http : HttpClient) {}

  /* Em testes, sujeito a modificações
  */
  cadastrar(entregaChave:any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'cadastrar', entregaChave).subscribe(response => {
        resolve(response);
      })
    });
  }

  alterar(id : Number, entregaChave : EntregaChave) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + id + '/alterar', entregaChave);
    });
  }

  listar() {
    return this.http.get(this.url);
  }

  alterarStatus(id:number, data:any){
    return new Promise((resolve, reject) => {
      this.http.post(this.url + id + '/updatestatus',data).subscribe(response => {
        resolve(response);
      })
    });
  }

  excluir(id : Number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + id + '/excluir');
    });
  }
  
}
