import { Software } from '../model/software';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SoftwareService {
  url = 'https://apoio-uniarp.herokuapp.com/softwares/';
  

  constructor(public http : HttpClient,) {

  }

  cadastrar(software : Software) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'cadastrar', software).subscribe(response => {
        resolve(response);
      })
    });
  }

  listar(){
    return this.http.get(this.url)

  }

  excluir(id: Number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + id + '/excluir');
    });
  } 

  alterar(id: Number, software: Software) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + id + '/alterar', software);
    });
  }
}
