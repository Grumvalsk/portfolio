import { Component } from '@angular/core';
import { InformazioniService } from '../services/informazioni.service';
import { Informazioni } from '../model/informazioni';
import { MatDialog } from '@angular/material/dialog';
import { DettaglioEsperienzaComponent } from '../dettaglio-esperienza/dettaglio-esperienza.component';
import { DettaglioInformazioneComponent } from '../dettaglio-informazione/dettaglio-informazione.component';
import { DettaglioInformazione } from '../model/dettaglio-informazione';
import { CompetenzeService } from '../services/competenze.service';
import { Competenza } from '../model/competenza';
import { GestioneCompetenzaComponent } from '../gestione-competenza/gestione-competenza.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-area-riservata-informazioni',
  templateUrl: './area-riservata-informazioni.component.html',
  styleUrls: ['./area-riservata-informazioni.component.css'],

})
export class AreaRiservataInformazioniComponent  {
  panelOpenState: boolean = false;  // Cambiato da signal a una variabile boolean
  titolo!:string;
  informazioni : Informazioni = new Informazioni();
  competenze:Competenza[]=[];
  competenza:Competenza=new Competenza();
  dettaglioInformazione: DettaglioInformazione = new DettaglioInformazione();

  constructor(private informazioniService: InformazioniService,
    private competenzeService:  CompetenzeService,
    public dialog: MatDialog,
     private rotte:Router) {}

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

    this.competenzeService.getCompetenze().subscribe(
      data=>{
        this.competenze=data;
        console.log('Competenze',this.competenze);

      }
    )
  }

  openDialogPresentazione(): void {
    if (!this.informazioni) {
      this.informazioni = new Informazioni();
    }

    this.dettaglioInformazione.descrizione = this.informazioni.presentazione || 'presentazione';
    this.dettaglioInformazione.immagine = this.informazioni.immaginePresentazione || 'presentazione immagine';
    this.dettaglioInformazione.flgIntroduzione=false;
    console.log(this.dettaglioInformazione + " STATO");

    this.dialog.open(DettaglioInformazioneComponent, {
      data: this.dettaglioInformazione
    });
  }

  openDialogIntroduzione(): void {
    if (!this.informazioni) {
      this.informazioni = new Informazioni();
    }

    this.dettaglioInformazione.descrizione = this.informazioni.introduzione || 'introduzione';
    this.dettaglioInformazione.immagine = this.informazioni.immagineIntroduzione || 'introduzione immagine';
    this.dettaglioInformazione.flgIntroduzione=true;
    console.log(this.dettaglioInformazione + " STATO");

    this.dialog.open(DettaglioInformazioneComponent, {
      data: this.dettaglioInformazione
    });
  }

  openDialogCompetenza(competenza?:Competenza): void {
    this.dialog.open(GestioneCompetenzaComponent, {
      data: this.competenza
    });
  }

  cancella(competenza:Competenza){
    this.competenzeService.cancella(competenza.id).subscribe(
      data=>{
        console.log("Cancellazione avvenuta con successo");

      }
    )
    this.rotte.navigate(['area-riservata'])

  }
}
