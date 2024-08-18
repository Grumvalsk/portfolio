import { Component, OnInit } from '@angular/core';
import { EsperienzeService } from '../services/esperienze.service'; // Assicurati che il percorso sia corretto
import { Esperienza } from '../model/esperienza';
import { MatDialog } from '@angular/material/dialog';
import { DettaglioEsperienzaComponent } from '../dettaglio-esperienza/dettaglio-esperienza.component';

@Component({
  selector: 'app-area-riservata',
  templateUrl: './area-riservata.component.html',
  styleUrls: ['./area-riservata.component.css'],

})
export class AreaRiservataComponent implements OnInit {

  esperienze: Esperienza[] = []; // Utilizza l'interfaccia

  constructor(private esperienzeService: EsperienzeService,
              public dialog: MatDialog,
              private esperienzaService:EsperienzeService) {}

  ngOnInit(): void {
    this.esperienzeService.getEsperienze().subscribe(
      data => {
        this.esperienze = data;
        console.log('Esperienze:', this.esperienze);
      },
      error => {
        console.error('Errore durante il recupero delle esperienze:', error);
      }
    );
  }

  openDialog(esperienza?: Esperienza): void {
    this.dialog.open(DettaglioEsperienzaComponent, {
      data: esperienza // Passa l'oggetto esperienza come dati al dialog
    });
  }

  cancella(esperienza:Esperienza):void{
    const id=esperienza.id
    this.esperienzaService.cancella(id).subscribe(
      data => {
        console.log("Cancellazione Avvenuta con successo")
       },
       error => {
         console.error('Errore durante la cancellazione:', error);
       }
     );
  }

}
