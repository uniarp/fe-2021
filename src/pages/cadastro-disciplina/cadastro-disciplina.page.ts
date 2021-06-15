import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-disciplina',
  templateUrl: './cadastro-disciplina.page.html',
  styleUrls: ['./cadastro-disciplina.page.scss'],
})
export class CadastroDisciplinaPage implements OnInit {

  constructor(public routerService : Router) { }

  ngOnInit() {
  }

  cancelar() {
    this.routerService.navigateByUrl('/home')
  }

}
