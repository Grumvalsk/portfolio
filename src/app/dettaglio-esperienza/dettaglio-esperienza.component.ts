import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Esperienza } from '../model/esperienza';
import { Tecnologia } from '../model/tecnologia';

@Component({
  selector: 'app-dettaglio-esperienza',
  templateUrl: './dettaglio-esperienza.component.html',
  styleUrls: ['./dettaglio-esperienza.component.css']
})
export class DettaglioEsperienzaComponent {
  tecnologie: Tecnologia[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: Esperienza) {
    this.tecnologie=data.tecnologie;
  }

  aggiungi() {
    const nuovaTecnologia: Tecnologia = new Tecnologia();  // Crea un nuovo oggetto vuoto di tipo Tecnologia
    this.tecnologie.push(nuovaTecnologia);  // Aggiungi l'oggetto all'array tecnologie
  }
}
