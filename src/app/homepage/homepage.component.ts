import { Component, OnInit } from '@angular/core';
import { EsperienzeService } from '../services/esperienze.service';
import { Esperienza } from '../model/esperienza';
import { Informazioni } from '../model/informazioni';
import { InformazioniService } from '../services/informazioni.service';
import { MatDialog } from '@angular/material/dialog';
import { DescrizioneEsperienzaComponent } from '../descrizione-esperienza/descrizione-esperienza.component';
import { CompetenzeService } from '../services/competenze.service';
import { Competenza } from '../model/competenza';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  informazioni: Informazioni = new Informazioni();
  esperienze: Esperienza[] = [];
  competenze:Competenza []=[];
  currentIndex: number = 0;

  constructor(private service: EsperienzeService, private informazioniService: InformazioniService, private competenzaService: CompetenzeService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.service.getEsperienze().subscribe(
      data => {
        this.esperienze = data;
        this.updateCarousel(); // Aggiorniamo la posizione del carosello all'inizio
      },
      error => {
        console.error('Errore durante il recupero delle esperienze:', error);
      }
    );

    this.informazioniService.getInformazioni().subscribe(
      data => {
        this.informazioni = data;
        console.log(this.informazioni);

      },
      error => {
        console.error('Errore durante il recupero delle informazioni:', error);
      }
    );

    this.competenzaService.getCompetenze().subscribe(
      data=>{
        this.competenze = data
      },
      error => {
        console.error('Errore durante il recupero delle competenze:', error);
      }
    )


  }


  dettaglioEsperienza(esperienza: Esperienza): void {
    console.log('Esperienza selezionata:', esperienza);
  }

  updateCurrentIndex(index: number): void {
    this.currentIndex = index;
    this.updateCarousel();
  }

  updateCarousel(): void {
    const carouselElement = document.querySelector('main#carousel') as HTMLElement;
    if (carouselElement) {
      carouselElement.style.setProperty('--position', (this.currentIndex + 1).toString());
    }
  }

  getMoreInfo(esperienza:Esperienza){
  this.dialog.open(DescrizioneEsperienzaComponent,{
    data:esperienza
  })
  }
}
