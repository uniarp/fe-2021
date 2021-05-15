import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = 'https://apoio-uniarp.herokuapp.com/cursos/'

  constructor(public http : HttpClient) {}

  cadastrar(curso : Curso) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'cadastrar', curso).subscribe(response => {
        resolve(response);
      })
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
