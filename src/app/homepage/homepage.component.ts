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
  competenze: Competenza[] = [];
  currentIndex: number = 0;
  intervalId: any; // Per tenere traccia dell'intervallo di animazione

  constructor(
    private service: EsperienzeService,
    private informazioniService: InformazioniService,
    private competenzaService: CompetenzeService,
    public dialog: MatDialog
  ) {}

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
      data => {
        this.competenze = data;
        this.startSliderAnimation(); // Avvia l'animazione dello slider
      },
      error => {
        console.error('Errore durante il recupero delle competenze:', error);
      }
    );
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

  getMoreInfo(esperienza: Esperienza): void {
    this.dialog.open(DescrizioneEsperienzaComponent, {
      data: esperienza
    });
  }

  startSliderAnimation(): void {
    this.intervalId = setInterval(() => {
      const slider = document.querySelector('.slider .slide-track') as HTMLElement;
      if (slider) {
        slider.style.transition = 'transform 1s ease';
        slider.style.transform = 'translateX(-100%)';
        setTimeout(() => {
          slider.style.transition = 'none'; // Disattiva la transizione per il reset
          slider.style.transform = 'translateX(0)'; // Resetta la posizione
          // Riporta il primo elemento alla fine
          const firstSlide = slider.querySelector('.slide') as HTMLElement;
          if (firstSlide) {
            slider.appendChild(firstSlide);
          }
        }, 1000); // Tempo per completare l'animazione
      }
    }, 30000); // Cambia ogni 30 secondi
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
