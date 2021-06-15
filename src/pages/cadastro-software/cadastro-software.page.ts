import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-software',
  templateUrl: './cadastro-software.page.html',
  styleUrls: ['./cadastro-software.page.scss'],
})
export class CadastroSoftwarePage implements OnInit {

  constructor(public routerService:Router) { }

  ngOnInit() {
  }

  cancelar() {
    this.routerService.navigateByUrl('/home')
  }
}
