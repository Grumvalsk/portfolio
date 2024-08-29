import { Component } from '@angular/core';
import { InformazioniService } from '../services/informazioni.service';
import { Informazioni } from '../model/informazioni';
import { MatDialog } from '@angular/material/dialog';
import { DettaglioEsperienzaComponent } from '../dettaglio-esperienza/dettaglio-esperienza.component';
import { DettaglioInformazioneComponent } from '../dettaglio-informazione/dettaglio-informazione.component';
import { DettaglioInformazione } from '../model/dettaglio-informazione';



@Component({
  selector: 'app-area-riservata-informazioni',
  templateUrl: './area-riservata-informazioni.component.html',
  styleUrls: ['./area-riservata-informazioni.component.css']
})
export class AreaRiservataInformazioniComponent  {

  titolo!:string
  informazioni : Informazioni = new Informazioni();
  dettaglioInformazione: DettaglioInformazione = new DettaglioInformazione();

  constructor(private informazioniService: InformazioniService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.informazioniService.getInformazioni().subscribe(
      data => {
        this.informazioni = data;
        console.log('Informazioni:', this.informazioni);
      },
      error => {
        console.error('Errore durante il recupero delle esperienze:', error);
      }
    );
  }

  openDialogPresentazione(): void {
    if (!this.informazioni) {
      this.informazioni = new Informazioni();
    }

    this.dettaglioInformazione.descrizione = this.informazioni.presentazione || 'presentazione';
    this.dettaglioInformazione.immagine = this.informazioni.immaginePresentazione || 'presentazione immagine';
    this.dettaglioInformazione.flgIntroduzione=false
    console.log(this.dettaglioInformazione+"STATO");

    this.dialog.open(DettaglioInformazioneComponent, {
      data: this.dettaglioInformazione
    });
  }

  openDialogIntroduzione(): void {
    if (!this.informazioni) {
      this.informazioni = new Informazioni();
    }

    // Verifica se 'introduzione' è null o undefined prima di assegnarlo
    this.dettaglioInformazione.descrizione = this.informazioni.introduzione || 'introduzione';
    this.dettaglioInformazione.immagine = this.informazioni.immagineIntroduzione || 'introduzione immagine';
    this.dettaglioInformazione.flgIntroduzione=true
    console.log(this.dettaglioInformazione+"STATO");
    this.dialog.open(DettaglioInformazioneComponent, {
      data: this.dettaglioInformazione
    });
  }

}
