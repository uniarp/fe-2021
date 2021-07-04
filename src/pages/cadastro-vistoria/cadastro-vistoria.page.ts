import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipamentoService } from 'src/services/equipamento.service';
import { SalaService } from 'src/services/sala.service';
import { Vistoria } from '../../model/vistoria';
import { VistoriaService } from '../../services/vistoria.service'

@Component({
  selector: 'app-cadastro-vistoria',
  templateUrl: './cadastro-vistoria.page.html',
  styleUrls: ['./cadastro-vistoria.page.scss'],
})
export class CadastroVistoriaPage {

  vistoria: Vistoria;
  salas: any;
  equipamentos: any;

  constructor(
    public vistoriaService: VistoriaService,
    public equipamentoService: EquipamentoService,
    public salaService: SalaService,
    public routerService: Router
  ) { }

  ionViewDidEnter() {
    this.vistoria = new Vistoria();
    this.salaService.listar().subscribe(dados => {
      this.salas = dados;
    });
    this.equipamentoService.listar().subscribe(dados => {
      this.equipamentos = dados;
    });
  }

  cadastrar() {
    console.log(this.vistoria)
    this.vistoriaService.cadastrar(this.vistoria).then(() => {
      this.routerService.navigate(['lista-vistorias']);
    })
  }

  cancelar() {
    this.routerService.navigateByUrl('/home')
  }

  listar() {
    this.routerService.navigate(['lista-vistorias']);
  }

  novo() {
    this.routerService.navigateByUrl('/cadastro-vistoria');
  }
}
