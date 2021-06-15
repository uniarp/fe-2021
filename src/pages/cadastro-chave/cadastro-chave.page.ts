import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chave } from '../../model/chave';
import { ChaveService } from '../../services/chave.service';
import { SalaService } from '../../services/sala.service';

@Component({
  selector: 'app-cadastro-chave',
  templateUrl: './cadastro-chave.page.html',
  styleUrls: ['./cadastro-chave.page.scss'],
})
export class CadastroChavePage {

  chave: Chave;
  salas : any;

  constructor(
    public chaveService : ChaveService,
    public salaService : SalaService,
    public routerService : Router) {
  }

  ionViewDidEnter() {
    this.chave = new Chave();
    this.salaService.listar().subscribe(dados => {
      this.salas = dados;
    });
    
  }

  cadastrar() {
    this.chaveService.cadastrar(this.chave).then(()=>{
    this.routerService.navigate(['lista-chaves']);
    })
  }

  cancelar() {
    this.routerService.navigateByUrl('/home')
  }

  listar() {
    this.routerService.navigate(['lista-chaves']);
  }
  
  novo() {
    this.routerService.navigate(['/cadastro-chave']);
  }

}
