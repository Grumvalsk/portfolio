import { Component } from '@angular/core';
import { InformazioniService } from '../services/informazioni.service';
import { Informazioni } from '../model/informazioni';
import { MatDialog } from '@angular/material/dialog';
import { DettaglioEsperienzaComponent } from '../dettaglio-esperienza/dettaglio-esperienza.component';
import { DettaglioInformazioneComponent } from '../dettaglio-informazione/dettaglio-informazione.component';



@Component({
  selector: 'app-area-riservata-informazioni',
  templateUrl: './area-riservata-informazioni.component.html',
  styleUrls: ['./area-riservata-informazioni.component.css']
})
export class AreaRiservataInformazioniComponent  {

  informazioni!:Informazioni;

  constructor(private informazioniSercice:InformazioniService, public dialog: MatDialog){}
  ngOnInit(): void {
    this.informazioniSercice.getInformazioni().subscribe(
      data => {
        this.informazioni = data;
        console.log('Esperienze:', this.informazioni);
      },
      error => {
        console.error('Errore durante il recupero delle esperienze:', error);
      }
    );
  }

  openDialogPresentazione(informazione?: Informazioni): void {
    this.dialog.open(DettaglioInformazioneComponent, {
      data: informazione
    });
  }

    openDialogIntroduzione(informazione?: Informazioni): void {
      this.dialog.open(DettaglioInformazioneComponent, {
        data: informazione
      });
  }

}
