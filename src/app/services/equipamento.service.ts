import { Injectable } from '@angular/core';
import {  } from '../classes/equipamento';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  constructor() { }

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
  solicitar(){
    console.log("solicitando equipamento")
  }
  listarEquipamento(){
    console.log("listando equipamento")
  }

}
