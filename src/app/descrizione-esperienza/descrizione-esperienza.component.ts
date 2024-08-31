import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Esperienza } from '../model/esperienza';

@Component({
  selector: 'app-descrizione-esperienza',
  templateUrl: './descrizione-esperienza.component.html',
  styleUrls: ['./descrizione-esperienza.component.css']
})
export class DescrizioneEsperienzaComponent {
  esp:Esperienza=new Esperienza()
  constructor( @Inject(MAT_DIALOG_DATA) public data: Esperienza){
   this.esp=data
  }
}
