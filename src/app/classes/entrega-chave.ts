import { Chave } from "./chave";
import { Professor } from "./professor";

export class EntregaChave {

    id? : Number;
    chave? : Chave;
    professor? : Professor;
    dataHoraEntrega? : String;
    dataHoraDevolucao : String;

}
