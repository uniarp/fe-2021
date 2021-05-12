import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipamento } from '../../model/equipamento';
import { EquipamentoService } from '../../services/equipamento.service';

@Component({
  selector: 'app-cadastro-equipamento',
  templateUrl: './cadastro-equipamento.page.html',
  styleUrls: ['./cadastro-equipamento.page.scss'],
})
export class CadastroEquipamentoPage  {
  //variavel pra guarda a equipamento

  equipamento: Equipamento;

  constructor(public equipamentoService:EquipamentoService,
    public routerService:Router) {
  }

  ionViewDidEnter(){
    console.log('Cadastro equipamento page - iondidviewENTER');
    //instanciando  objeto da classe que vou cadastrar
    this.equipamento = new Equipamento();
  }

  cadastrar(){
    console.log('Equipamento - cadastrar ');
    //passar a equipamento que esta sendo cadastrada
    this.equipamentoService.cadastrar(this.equipamento);
    this.routerService.navigate(['lista-de-equipamentos']);
  }

  cancelar() {
    this.equipamento = null;
  }

  listar(){
    console.log('Equipamento - listar');
    this.routerService.navigate(['lista-de-equipamentos']);
  }

  novo() {
    this.routerService.navigateByUrl('/cadastro-equipamento')
  }
}
