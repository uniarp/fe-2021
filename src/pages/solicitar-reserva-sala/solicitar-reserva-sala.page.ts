import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaSala } from '../../model/reserva-sala';
import { ProfessorService } from '../../services/professor.service';
import { ReservaSalaService } from '../../services/reserva-sala.service';
import { SalaService } from '../../services/sala.service';

@Component({
  selector: 'app-solicitar-reserva-sala',
  templateUrl: './solicitar-reserva-sala.page.html',
  styleUrls: ['./solicitar-reserva-sala.page.scss'],
})
export class SolicitarReservaSalaPage {

  reservaSala: ReservaSala;
  salas: any;
  professores: any;

  constructor(
    public reservaSalaSevice: ReservaSalaService,
    public salaService: SalaService,
    public professorService: ProfessorService,
    public routerService: Router) {
  }

  ionViewDidEnter() {
    this.reservaSala = new ReservaSala();
    this.salaService.listar().subscribe(dados => {
      this.salas = dados;
    });
    this.professorService.listar().subscribe(dados => {
      this.professores = dados;
    });
  }

  cadastrar() {
    this.reservaSala.status = "solicitado";
    this.reservaSalaSevice.cadastrar(this.reservaSala).then(() => {
      ;
      this.routerService.navigate(['lista-reservas-sala']);
    })
  }

  cancelar() {
    this.reservaSala = null;
    this.routerService.navigateByUrl('/home')
  }

  novo() {
    this.routerService.navigateByUrl('solicitar-reserva-sala');
  }

}
