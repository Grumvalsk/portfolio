import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Esperienza } from '../model/esperienza';
import { Tecnologia } from '../model/tecnologia';

@Component({
  selector: 'app-descrizione-esperienza',
  templateUrl: './descrizione-esperienza.component.html',
  styleUrls: ['./descrizione-esperienza.component.css']
})
export class DescrizioneEsperienzaComponent {
  esp:any
  tecnologie:Tecnologia[]=[];
  valori:string[]=[];
  constructor( @Inject(MAT_DIALOG_DATA) public data: Esperienza){
   this.esp=data
   this.tecnologie=this.esp.tecnologie

   this.tecnologie.forEach((tecnologia: Tecnologia) => {
    let value = tecnologia.nome+'('+tecnologia.versione+')';
    this.valori.push(value)

  });
  }
}
