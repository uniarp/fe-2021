import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  url = 'https://apoio-uniarp.herokuapp.com/usuarios'
  
  constructor(public http : HttpClient) { }

  listar() {
    return this.http.get(this.url);
  }
}
