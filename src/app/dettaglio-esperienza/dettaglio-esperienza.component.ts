import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Esperienza } from '../model/esperienza';

@Component({
  selector: 'app-dettaglio-esperienza',
  templateUrl: './dettaglio-esperienza.component.html',
  styleUrl: './dettaglio-esperienza.component.css'
})
export class DettaglioEsperienzaComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Esperienza) {}
}
