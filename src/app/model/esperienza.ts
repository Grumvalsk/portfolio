import { Tecnologia } from "./tecnologia";


export class Esperienza {
  id: number;
  nomeAzienda: string;
  nomeProgetto: string;
  dataInizio: string;
  dataFine: string;
  descrizione: string;
  tecnologie: Tecnologia[];

  constructor(){
    this.id=0,
    this.nomeAzienda='',
    this.nomeProgetto='',
    this.dataInizio='',
    this.dataFine='',
    this.descrizione='',
    this.tecnologie=[]
  }
}
