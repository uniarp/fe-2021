import { Chave } from "./chave";
import { Professor } from "./professor";

export class EntregaChave {

    id? : Number;
    chave? : Chave;
    professor? : Professor;
    dataHoraEntrega? : String;

    constructor() {    
        this.chave = new Chave();
        this.professor = new Professor();   
    }

}
