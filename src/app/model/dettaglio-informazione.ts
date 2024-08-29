import { Tecnologia } from "./tecnologia";


export class DettaglioInformazione {
  descrizione:string;
  immagine:string
  flgIntroduzione:boolean


  constructor(){
    this.descrizione='',
    this.immagine='',
    this.flgIntroduzione=false
  }
}
