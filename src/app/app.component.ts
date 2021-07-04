import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  toListed: boolean = false;
  toRegister: boolean = false;
  toReservation: boolean = false;
  toReport: boolean = false;
  
  listas = [
    {
      'nome': 'Salas',
      'link': 'lista-salas',
      'img': '/assets/custom_icons/icon_sala.png'
    },
    {
      'nome': 'Equipamentos',
      'link': 'lista-equipamentos',
      'img': '/assets/custom_icons/icon_equipamento.png'
    },
    {
      'nome': 'Materiais',
      'link': 'lista-materiais',
      'img': '/assets/custom_icons/icon_material.png'
    },
    {
      'nome': 'Cursos',
      'link': 'lista-cursos',
      'img': '/assets/custom_icons/icon_curso.png'
    },
    {
      'nome': 'Disciplinas',
      'link': 'lista-disciplinas',
      'img': '/assets/custom_icons/icon_disciplina.png'
    },
    {
      'nome': 'Professores',
      'link': 'lista-professor',
      'img': '/assets/custom_icons/icon_professor.png'
    },
    {
      'nome': 'Tipos de Equipamento',
      'link': 'lista-tipos-equipamento',
      'img': '/assets/custom_icons/icon_tipo_equipamento.png'
    },
    {
      'nome': 'Vistorias',
      'link': 'lista-vistorias',
      'img': '/assets/custom_icons/icon_vistoria.png'
    },
    {
      'nome': 'Softwares',
      'link': 'lista-software',
      'img': '/assets/custom_icons/icon_software.png'
    },
    {
      'nome': 'Chaves',
      'link': 'lista-chaves',
      'img': '/assets/custom_icons/icon_chave.png'
    },
    {
      'nome': 'Entregas de Material',
      'link': 'lista-entregas-material',
      'img': '/assets/custom_icons/icon_entrega_material.png'
    },
    {
      'nome': 'Entregas de Chave',
      'link': 'lista-entregas-chave',
      'img': '/assets/custom_icons/icon_entrega_chave.png'
    },    
    {
      'nome': 'Incidentes Resolvidos',
      'link': 'lista-incidentes-resolvidos',
      'img': '/assets/custom_icons/icon_incidente.png'
    },
    {
      'nome': 'FAQ',
      'link': '/lista-pergunta',
      'img': '/assets/custom_icons/icon_questao.png'
    }
  ];
  
  reservas = [
    {
      'nome': 'Reservas de Sala',
      'link': 'lista-reservas-sala',
      'img': '/assets/custom_icons/icon_reserva_sala.png'
    },
    {
      'nome': 'Solicitar Sala',
      'link': 'solicitar-reserva-sala',
      'img': '/assets/custom_icons/icon_solicitar_sala.png'
    },
    {
      'nome': 'Esperas de Sala',
      'link': 'lista-espera-sala',
      'img': '/assets/custom_icons/icon_espera_sala.png'
    },
    {
      'nome': 'Entregar Chave',
      'link': 'cadastro-entrega-chave',
      'img': '/assets/custom_icons/icon_entregar_chave.png'
    },
    {
      'nome': 'Reservas de Equipamento',
      'link': 'lista-reservas-equipamento',
      'img': '/assets/custom_icons/icon_reserva_equipamento.png'
    },
    {
      'nome': 'Solicitar Equipamento',
      'link': 'solicitar-equipamento',
      'img': '/assets/custom_icons/icon_solicitar_equipamento.png'
    },
    {
      'nome': 'Solicitar Material',
      'link': 'solicitar-material',
      'img': '/assets/custom_icons/icon_solicitar_material.png'
    },
    {
      'nome': 'Entregar Material',
      'link': 'cadastro-entrega-material',
      'img': '/assets/custom_icons/icon_entrega_material.png'
    }
  ]

  cadastros = [
    {
      'nome': 'Sala',
      'link': 'cadastro-sala',
      'img': '/assets/custom_icons/icon_sala.png'
    },
    {
      'nome': 'Equipamento',
      'link': 'cadastro-equipamento',
      'img': '/assets/custom_icons/icon_equipamento.png'
    },
    {
      'nome': 'Material',
      'link': 'cadastro-material',
      'img': '/assets/custom_icons/icon_material.png'
    },
    {
      'nome': 'Curso',
      'link': 'cadastro-curso',
      'img': '/assets/custom_icons/icon_curso.png'
    },
    {
      'nome': 'Disciplina',
      'link': 'cadastro-disciplina',
      'img': '/assets/custom_icons/icon_disciplina.png'
    },
    {
      'nome': 'Professor',
      'link': 'cadastro-professor',
      'img': '/assets/custom_icons/icon_professor.png'
    },
    {
      'nome': 'Tipo Equipamento',
      'link': 'cadastro-tipo-equipamento',
      'img': '/assets/custom_icons/icon_tipo_equipamento.png'
    },
    {
      'nome': 'Vistoria',
      'link': 'cadastro-vistoria',
      'img': '/assets/custom_icons/icon_vistoria.png'
    },
    {
      'nome': 'Software',
      'link': 'cadastro-software',
      'img': '/assets/custom_icons/icon_vistoria.png'
    },
    {
      'nome': 'Chave',
      'link': 'cadastro-chave',
      'img': '/assets/custom_icons/icon_chave.png'
    },
    {
      'nome': 'FAQ',
      'link': 'cadastro-faq',
      'img': '/assets/custom_icons/icon_questao.png'
    }
  ];

  constructor(public routeService: Router) {
  }

  home() {
    this.routeService.navigateByUrl('/home')
  }

  isListed() {
    if (this.toListed == false) {
      this.toListed = true;
    } else {
      this.toListed = false;
    }
  }

  isRegister() {
    if (this.toRegister == false) {
      this.toRegister = true;
    } else {
      this.toRegister = false;
    }
  }

  isReservation() {
    if (this.toReservation == false) {
      this.toReservation = true;
    } else {
      this.toReservation = false;
    }
  }

}