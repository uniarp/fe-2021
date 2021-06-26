import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from 'src/services/professor.service';
import { ReservaSalaService } from 'src/services/reserva-sala.service';

@Component({
  selector: 'app-buscar-salas',
  templateUrl: './buscar-salas.page.html',
  styleUrls: ['./buscar-salas.page.scss'],
})
export class BuscarSalasPage {

  professores: any;
  reservasSala: any;
  salasEncontradas: any;
  id_professor: Number;

  constructor(public professorService: ProfessorService,
    public reservaSalasService: ReservaSalaService,
    public routerService: Router) {
  }

  ionViewDidEnter() {
    this.professorService.listar().subscribe(dados => {
      this.professores = dados;
    });
  }

  buscar() {
    console.log(this.id_professor);
    this.reservaSalasService.buscar(this.id_professor).subscribe(dados => {
      this.salasEncontradas = dados;
    });
    console.log(this.salasEncontradas);
  }
}
