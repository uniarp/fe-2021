import { Equipamento } from "./equipamento";
import { Sala } from "./sala";

export class Vistoria {

  id: Number;
  emconformidade: boolean;
  data: Date;
  descricao: String;
  periodo: String;
  sala: Sala;
  equipamento: Equipamento;

  constructor() {
    this.sala = new Sala();
    this.equipamento = new Equipamento();
  }

}
