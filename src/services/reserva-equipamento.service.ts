import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservaEquipamento } from '../model/reserva-equipamento';

@Injectable({
  providedIn: 'root'
})
export class ReservaEquipamentoService {

  url = 'https://apoio-uniarp.herokuapp.com/reservasEquipamento/';
  
  constructor(public http: HttpClient) { }

  /* Em testes, sujeito a modificações
  */
  cadastrar(reservaEquipamento: ReservaEquipamento) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'cadastrar', reservaEquipamento).subscribe(response => {
        resolve(response);
      })
    });
  }

  alterar(id: Number, reservaEquipamento: ReservaEquipamento) {
    console.log(id, reservaEquipamento, "teste");
  }

  listar() {
    return this.http.get(this.url);
  }

  excluir(id: Number) {
    return this.http.delete(this.url + id + '/excluir');
  }

  listaSolicitada() {
    return this.http.get(this.url + 'solicitada')
  }

  entregar(id: number, data: any) {
    console.log(id, data);
    return new Promise((resolve, reject) => {
      this.http.post(this.url + id + '/entregar', data).subscribe(response => {resolve(response)
      })

      console.log(id, data);
    });
  }
  devolver(id: number, data: any) {
    console.log(id, data);
    return new Promise((resolve, reject) => {
      this.http.post(this.url + id + '/devolver', data).subscribe(response => {resolve(response)
      })
      console.log(this.url);
    });
  }
}
