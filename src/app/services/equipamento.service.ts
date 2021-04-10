import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  } from '../classes/equipamento';


@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {
  url = 'https://apoio-uniarp.herokuapp.com/equipamentos/';

  constructor(public http : HttpClient,) {

  }

  backEnd:string='https://apoio-uniarp.herokuapp.com/reservaEquipamentos'
  

  solicitar(solicitacao:any){
    console.log("solicitando equipamento",solicitacao);
    return this.http.post(this.backEnd+'solicitar', solicitacao)
  }

  cadastrar(){
    console.log("cadastro de equipamento")
  }
  alterar(){
    console.log("cadastro de equipamento")
  }
  excluir(){

    console.log("excluindo equipamento")
  }
  listarTodos(){
    console.log("listando todos os equipamentos")
  }
  listarPorSala(){
    console.log("listando equipamento por sala")
  }
  
  listarEquipamento(){
    return this.http.get(this.url)
  }

}
