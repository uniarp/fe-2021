import { Localizacao } from "./localizacao"
import { Professor } from "./professor"
import { Sala } from "./sala"

export class Incidente {
  
  id: number
  descricao?: string
  tempoabertura?: string
  status?: string
  tempofechamento?: string
  resolucao?: string
  sala?: Sala
  professor?: Professor

  constructor() {
    this.sala = new Sala();
    this.professor = new Professor();
  }

}
