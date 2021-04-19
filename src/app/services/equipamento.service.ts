import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  } from '../classes/equipamento';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  backEnd:string='https://apoio-uniarp.herokuapp.com/reservaEquipamentos'
  constructor(
    private http:HttpClient,
  ) { }

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
    console.log("listando equipamento")
  }

}
