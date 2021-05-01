import { Professor } from "./professor";
import { Sala } from "./sala";

export class ReservaSala {

    id? : Number;
    data? : Date;
    qtdAlunos? : Number;
    status? : String;
    periodo? : String;
    sala? : Sala;
    professor? : Professor;
    
}
