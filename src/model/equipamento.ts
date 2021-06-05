import { Sala } from "./sala";
import { TipoEquipamento } from "./tipo-equipamento";

export class Equipamento {

  id?: Number;
  dataAquisicao?: Date;
  marca?: String;
  status?: String;
  modelo?: String;
  sala?: Sala;
  tipoEquipamento?: TipoEquipamento;

  constructor() {
    this.tipoEquipamento= new TipoEquipamento();
    this.sala = new Sala();
  }
  
}
