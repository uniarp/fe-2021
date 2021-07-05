import { Professor } from "./professor";
import { Sala } from "./sala";
import { Usuario } from "./usuario";

export class ReservaSala {

    id?: Number;
    data?: Date;
    qtdAlunos?: Number;
    status?: String;
    periodo?: String;
    sala?: Sala;
    professor?: Professor;
    usuario: Usuario;

    constructor() {
        this.sala = new Sala();
        this.professor = new Professor();
        this.usuario = new Usuario();
    }
}
