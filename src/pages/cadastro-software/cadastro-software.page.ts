import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { Software } from '../../model/software';
import { SoftwareService } from '../../services/software.service';
>>>>>>> origin

@Component({
  selector: 'app-cadastro-software',
  templateUrl: './cadastro-software.page.html',
  styleUrls: ['./cadastro-software.page.scss'],
})
export class CadastroSoftwarePage {

<<<<<<< HEAD
  constructor(public routerService:Router) { }
=======
  software:Software;
>>>>>>> origin

  constructor(
    public softwareService:SoftwareService,
    public routeService:Router) {
      
     }

<<<<<<< HEAD
  cancelar() {
    this.routerService.navigateByUrl('/home')
  }
=======
  ionViewDidEnter(){
    this.software= new Software();
    }
    cadastrar(software:Software){
      this.softwareService.cadastrar(this.software);
      this.routeService.navigateByUrl('/lista-software')
    }
    cancelar(){
      this.routeService.navigateByUrl('/lista-software')
    }
>>>>>>> origin
}
