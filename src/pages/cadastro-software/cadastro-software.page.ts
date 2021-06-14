import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Software } from '../../model/software';
import { SoftwareService } from '../../services/software.service';

@Component({
  selector: 'app-cadastro-software',
  templateUrl: './cadastro-software.page.html',
  styleUrls: ['./cadastro-software.page.scss'],
})
export class CadastroSoftwarePage {

  software:Software;

  constructor(
    public softwareService:SoftwareService,
    public routeService:Router) {
      
     }

  ionViewDidEnter(){
    this.software= new Software();
    }
    cadastrar(software:Software){
      this.softwareService.cadastrar(this.software).then(()=>{
      this.routeService.navigateByUrl('/lista-software')
      })
    }
    cancelar(){
      this.routeService.navigateByUrl('/lista-software')
    }
}
