import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-equipamento',
  templateUrl: './cadastro-equipamento.page.html',
  styleUrls: ['./cadastro-equipamento.page.scss'],
})
export class CadastroEquipamentoPage  {
  //variavel pra guarda a equipamento

  constructor(
  ) { }

  ionViewDidEnter(){
  }

  gravar(){
    console.log('Equipamento - gravar ');
    //passar a equipamento que esta sendo cadastrada
  }

  cancelar(){
    console.log('Equipamento - cancelar');
  }

  listar(){
    console.log('Equipamento - listar');
  }

}
