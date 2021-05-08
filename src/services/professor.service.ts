import { Injectable } from '@angular/core';
import { Professor } from '../app/classes/professor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  url='https://apoio-uniarp.herokuapp.com/professores/'
  
  constructor(public http : HttpClient) {
  }
  
  cadastrar(professor: Professor) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'cadastrar', professor).subscribe(response => {
        resolve(response);
      })
    });
  }

  alterar(id : Number, professor: Professor){
    return new Promise((resolve, reject) => {
      this.http.post(this.url + id + '/alterar', professor);
    });
  }

  excluir(id : Number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + id + '/excluir')
    })
  } 

  listar() {
    return this.http.get(this.url);
  }
}
