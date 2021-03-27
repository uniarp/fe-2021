import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoEquipamento } from './tipo-equipamento/tipo-equipamento';

@Injectable({
  providedIn: 'root'
})

export class TipoEquipamentoService {

  constructor(public http : HttpClient) {}

  /* Em testes, sujeito a modificações
  */
  cadastrar(tipoEquipamento : TipoEquipamento) {
    var rota = "cadastrar";
    return new Promise((resolve, reject) => {
      this.http.post('https://apoio-uniarp.herokuapp.com/tipoEquipamentos/' + rota, tipoEquipamento).subscribe(response => {
        resolve(response);
      })
    });
  }
  
  alterar(id : Number, tipoEquipamento : TipoEquipamento) {
    var rota = "alterar";
    return new Promise((resolve, reject) => {
      this.http.post('https://apoio-uniarp.herokuapp.com/tipoEquipamentos/' + id + rota, tipoEquipamento).subscribe(response => {
        resolve(response);
      })
    });
  }

  listar() {
    return this.http.get('https://apoio-uniarp.herokuapp.com/tipoEquipamentos/').toPromise();
  }

  excluir(id : Number) {
    var rota = "excluir";
    return new Promise((resolve, reject) => {
      this.http.post('https://apoio-uniarp.herokuapp.com/tipoEquipamentos/' + id + rota, id).subscribe(response => {
        resolve(response);
      })
    });
  }

}
