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
      'icon': 'reader-outline'
    },
    {
      'nome': 'Equipamentos',
      'link': 'lista-equipamentos',
      'icon': 'file-tray-stacked-outline'
    },
    {
      'nome': 'Materiais',
      'link': 'lista-materiais',
      'icon': 'layers-outline'
    },
    {
      'nome': 'Cursos',
      'link': 'lista-cursos',
      'icon': 'school'
    },
    {
      'nome': 'Disciplinas',
      'link': 'lista-disciplinas',
      'icon': 'documents-outline'
    },
    {
      'nome': 'Professores',
      'link': 'lista-professor',
      'icon': 'person-outline'
    },
    {
      'nome': 'Tipos de Equipamento',
      'link': 'lista-tipos-equipamento',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Vistorias',
      'link': 'lista-vistorias',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Softwares',
      'link': 'lista-software',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Chaves',
      'link': 'lista-chaves',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Entregas de Materiais',
      'link': 'lista-entregas-material',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Entregas de Chave',
      'link': 'lista-entregas-chave',
      'icon': 'reader-outline'
    },    
    {
      'nome': 'Incidentes Resolvidos',
      'link': 'lista-incidentes-resolvidos',
      'icon': 'reader-outline'
    },
    {
      'nome': 'FAQ',
      'link': '/lista-pergunta',
      'icon': 'information-circle-outline'
    }
  ];
  
  reservas = [
    {
      'nome': 'Reservas de Sala',
      'link': 'lista-reservas-sala',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Solicitar Sala',
      'link': 'solicitar-reserva-sala',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Esperas de Sala',
      'link': 'lista-espera-sala',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Entregar Chave',
      'link': 'cadastro-entrega-chave',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Reservas de Equipamento',
      'link': 'lista-reservas-equipamento',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Solicitar Equipamento',
      'link': 'solicitar-equipamento',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Solicitar Material',
      'link': 'solicitar-material',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Entregar Material',
      'link': 'cadastro-entrega-material',
      'icon': 'reader-outline'
    }
  ]

  cadastros = [
    {
      'nome': 'Sala',
      'link': 'cadastro-sala',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Equipamento',
      'link': 'cadastro-equipamento',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Material',
      'link': 'cadastro-material',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Curso',
      'link': 'cadastro-curso',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Disciplina',
      'link': 'cadastro-disciplina',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Professor',
      'link': 'cadastro-professor',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Tipo Equipamento',
      'link': 'cadastro-tipo-equipamento',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Vistoria',
      'link': 'cadastro-vistoria',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Software',
      'link': 'cadastro-software',
      'icon': 'reader-outline'
    },
    {
      'nome': 'Chave',
      'link': 'cadastro-chave',
      'icon': 'reader-outline'
    },
    {
      'nome': 'FAQ',
      'link': 'cadastro-faq',
      'icon': 'reader-outline'
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