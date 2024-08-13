import { Tecnologia } from "./tecnologia";


export class Esperienza {
  nomeAzienda: string;
  nomeProgetto: string;
  dataInizio: string;
  dataFine: string;
  descrizione: string;
  tecnologie: Tecnologia[];

  constructor(){
    this.nomeAzienda='',
    this.nomeProgetto='',
    this.dataInizio='',
    this.dataFine='',
    this.descrizione='',
    this.tecnologie=[]
  }
}
