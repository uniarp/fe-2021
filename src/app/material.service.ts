import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Material} from './material/material';


@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  url = 'https://apoio-uniarp.herokuapp.com/materiais/';

  constructor(public http: HttpClient) {
  }

  cadastrar(material: Material) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'cadastrar', material).subscribe(response => {
        resolve(response);
      })
    });
  }

  alterar(id: Number, material: Material) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + id + '/alterar', material);
    });
  }

  listar() {
    return this.http.get(this.url);
  }

  excluir(id: Number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + id + '/excluir');
    });
  }

}
