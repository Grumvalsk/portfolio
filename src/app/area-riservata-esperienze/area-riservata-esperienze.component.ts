import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DettaglioEsperienzaComponent } from '../dettaglio-esperienza/dettaglio-esperienza.component';
import { Esperienza } from '../model/esperienza';
import { EsperienzeService } from '../services/esperienze.service';

@Component({
  selector: 'app-area-riservata-esperienze',
  templateUrl: './area-riservata-esperienze.component.html',
  styleUrls: ['./area-riservata-esperienze.component.css']
})
export class AreaRiservataEsperienzeComponent  {

  esperienze: Esperienza[] = []; // Utilizza l'interfaccia

  constructor(private esperienzeService: EsperienzeService,
              public dialog: MatDialog) {}

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
    this.esperienzeService.cancella(id).subscribe(
      data => {
        console.log("Cancellazione Avvenuta con successo")
       },
       error => {
         console.error('Errore durante la cancellazione:', error);
       }
     );
  }
}
