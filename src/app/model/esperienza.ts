import { Tecnologia } from "./tecnologia";


export interface Esperienza {
  nomeAzienda: string;
  nomeProgetto: string;
  dataInizio: string;
  dataFine: string;
  descrizione: string;
  tecnologie: Tecnologia[];
}
