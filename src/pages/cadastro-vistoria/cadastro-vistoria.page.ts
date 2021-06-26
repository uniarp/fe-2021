import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vistoria } from '../../model/vistoria';
import { VistoriaService } from '../../services/vistoria.service'

@Component({
  selector: 'app-cadastro-vistoria',
  templateUrl: './cadastro-vistoria.page.html',
  styleUrls: ['./cadastro-vistoria.page.scss'],
})
export class CadastroVistoriaPage {

  vistoria : Vistoria;

  constructor(
    public vistoriaService : VistoriaService,
    public routerService : Router
    ) { }

  ionViewDidEnter() {
    console.log('cadastro vistoria page - iondidviewENTER')
    this.vistoria = new Vistoria();
  }

  cadastrar() { //alterado o gravar para cadastrar
    console.log('Vistoria - cadastrar');
    // passar a vistoria que está sendo cadastrado
    this.vistoriaService.cadastrar(this.vistoria).then(()=>{
    this.routerService.navigate(['lista-vistorias']);
    })
  }

  cancelar() {
    console.log('Vistoria - cancelar');
    this.routerService.navigateByUrl('/home')
  }

  listar() {
    console.log('Vistoria - listar');
    this.routerService.navigate(['lista-vistorias']);
  }

  novo() {
    this.routerService.navigateByUrl('/cadastro-vistoria');
  }
}
