import { Equipamento } from "./equipamento";
import { Professor} from "./professor";

export class ReservaEquipamento {
    id?:number;
    periodo?:string;
    status?:string;
    dataEntrega?:Date;
    dataDevolucao?:Date;
    observacao?:string;
    equipamento?:Equipamento;
    professor?:Professor;
    
    constructor(){
        this.equipamento=new Equipamento();
        this.professor=new Professor();
    }
}
