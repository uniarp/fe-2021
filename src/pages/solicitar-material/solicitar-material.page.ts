import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitar-material',
  templateUrl: './solicitar-material.page.html',
  styleUrls: ['./solicitar-material.page.scss'],
})
export class SolicitarMaterialPage implements OnInit {

  constructor(public routerService:Router) { }

  ngOnInit() {
  }

  cadastrar() {
    this.routerService.navigateByUrl('/home')
  }
}
