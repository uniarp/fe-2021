import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaSalaService } from 'src/services/reserva-sala.service';
import { EntregaChave } from '../../model/entrega-chave';
import { ChaveService } from '../../services/chave.service';
import { EntregaChaveService } from '../../services/entrega-chave.service';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-cadastro-entrega-chave',
  templateUrl: './cadastro-entrega-chave.page.html',
  styleUrls: ['./cadastro-entrega-chave.page.scss'],
})
// Classe não desenvolvida para o release inicial
export class CadastroEntregaChavePage {

  /*
  entregaChave: EntregaChave;
  professores: any;
  chaves: any;
  reservasSala: any;

  constructor(
    public entregaChaveService: EntregaChaveService,
    public professorService: ProfessorService,
    public chaveService: ChaveService,
    public reservaSalaService: ReservaSalaService,
    public routerService: Router) {
  }

  ionViewDidEnter() {
    this.entregaChave = new EntregaChave();
    this.professorService.listar().subscribe(dados => {
      this.professores = dados;
    });
    this.chaveService.listar().subscribe(dados => {
      this.chaves = dados;
    });
    this.reservaSalaService.listar().subscribe(dados => {
      this.reservasSala = dados;
    })
  }

  cadastrar() {
    this.entregaChaveService.cadastrar(this.entregaChave).then(() => {
      this.routerService.navigate(['lista-entregas-chave']);
    })
  }

  cancelar() {
    this.entregaChave = null;
    this.routerService.navigateByUrl('/home');
  }

  listar() {
    this.routerService.navigate(['lista-entregas-chave']);
  }

  novo() {
    this.routerService.navigateByUrl('/cadastro-entrega-chave');
  }
  */

}
