import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoEquipamentoService } from 'src/services/tipo-equipamento.service';
import { Equipamento } from '../../model/equipamento';
import { EquipamentoService } from '../../services/equipamento.service';
import { SalaService } from '../../services/sala.service';

@Component({
  selector: 'app-cadastro-equipamento',
  templateUrl: './cadastro-equipamento.page.html',
  styleUrls: ['./cadastro-equipamento.page.scss'],
})
export class CadastroEquipamentoPage  {
  //variavel pra guarda a equipamento

  equipamento: Equipamento;
  salas : any;
  tiposEquipamento : any;

  constructor(public equipamentoService:EquipamentoService,
    public tipoEquipamentoService:TipoEquipamentoService,
    public salaService:SalaService,
    public routerService:Router) {
  }

  ionViewDidEnter(){
    console.log('Cadastro equipamento page - iondidviewENTER');
    //instanciando  objeto da classe que vou cadastrar
    this.equipamento = new Equipamento();
    this.tipoEquipamentoService.listar().subscribe(dados => {
      this.tiposEquipamento = dados;
    });
    this.salaService.listar().subscribe(dados => {
      this.salas = dados;
    });    
  }

  cadastrar(){
    console.log('Equipamento - cadastrar ');
    //passar a equipamento que esta sendo cadastrada
    console.log(this.equipamento);
    this.equipamentoService.cadastrar(this.equipamento);
    this.routerService.navigate(['lista-equipamentos']);
  }

  cancelar() {
    this.equipamento.localizacao = null;
    this.equipamento.marca = null;
    this.equipamento.modelo = null;
    this.equipamento.status = null;
    this.equipamento.tipoEquipamento = null;
    this.equipamento.dataAquisicao = null;
  }

  listar(){
    console.log('Equipamento - listar');
    this.routerService.navigate(['lista-de-equipamentos']);
  }

  novo() {
    this.routerService.navigateByUrl('/cadastro-equipamento')
  }
}
