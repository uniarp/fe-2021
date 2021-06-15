import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoftwareService } from '../../services/software.service';

@Component({
  selector: 'app-lista-software',
  templateUrl: './lista-software.page.html',
  styleUrls: ['./lista-software.page.scss'],
})
export class ListaSoftwarePage implements OnInit {
  software : any;
  constructor(
    public softwareService:SoftwareService, 
    public routerService:Router
  ) { }

  ngOnInit() {
    this.software = [];
  }
  ionViewWillEnter() {
    this.software = [];
      this.softwareService.listar().subscribe(dados => {
        this.software = dados;
        console.log(this.software);
      });
  }
  novo() {
    this.routerService.navigateByUrl('/cadastro-software');
  }
  excluir() {

  }

  alterar() {

  }

}
