import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sala } from '../../model/sala';
import { SalaService } from '../../services/sala.service';


@Component({
  selector: 'app-cadastro-sala',
  templateUrl: './cadastro-sala.page.html',
  styleUrls: ['./cadastro-sala.page.scss'],
})
export class CadastroSalaPage {

  sala: Sala;

  constructor(
    public salaService: SalaService,
    public routerService: Router
  ) { }

  ionViewDidEnter() {
    this.sala = new Sala();
  }

  cadastrar() {
    console.log(this.sala);
    this.salaService.cadastrar(this.sala).then(() => {
      this.routerService.navigate(['lista-sala']);
    });
  }

  cancelar() {
    this.sala.numerosala = null;
    this.sala.bloco = null;
    this.sala.andar = null;
    this.sala.capacidade = null;
    this.routerService.navigateByUrl('/home')
  }

  listar() {
    this.routerService.navigate(['lista-sala']);
  }

}
