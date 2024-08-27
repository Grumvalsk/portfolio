import { Component, Inject } from '@angular/core';
import { Informazioni } from '../model/informazioni';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dettaglio-informazione',
  templateUrl: './dettaglio-informazione.component.html',
  styleUrls: ['./dettaglio-informazione.component.css']
})
export class DettaglioInformazioneComponent {

  informazione!:Informazioni

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Informazioni,
  ){

  }

}
