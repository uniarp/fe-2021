import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Incidente } from '../model/incidente';

@Injectable({
  providedIn: 'root'
})
export class IncidenteService {

  url = 'https://apoio-uniarp.herokuapp.com/incidentes/';

  constructor(public http: HttpClient) { }

  cadastrar(incidente: Incidente) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'cadastrar', incidente).subscribe(response => {
        resolve(response);
      })
    });
  }
  alterar(id: Number, incidente: Incidente) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + id + 'alterar', incidente);
    });
  }
  listar() {
    return this.http.get(this.url);
  }
  excluir(id: Number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + id + 'excluir');
    });
  }

}
