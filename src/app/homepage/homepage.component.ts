import { Component, OnInit } from '@angular/core';
import { EsperienzeService } from '../services/esperienze.service';
import { Esperienza } from '../model/esperienza';
import { Informazioni } from '../model/informazioni';
import { InformazioniService } from '../services/informazioni.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  informazioni: Informazioni = new Informazioni();
  esperienze: Esperienza[] = [];
  groupedEsperienze: Esperienza[][] = [];
  currentIndex: number = 0;

  constructor(private service: EsperienzeService, private informazioniService: InformazioniService) {}

  ngOnInit(): void {
    this.service.getEsperienze().subscribe(
      data => {
        this.esperienze = data;
        this.groupedEsperienze = this.groupByThree(this.esperienze);
        this.updateCarousel(); // Aggiorniamo la posizione del carosello all'inizio
        console.log('Esperienze raggruppate:', this.groupedEsperienze);
      },
      error => {
        console.error('Errore durante il recupero delle esperienze:', error);
      }
    );

    this.informazioniService.getInformazioni().subscribe(
      data => {
        this.informazioni = data;
      },
      error => {
        console.error('Errore durante il recupero delle informazioni:', error);
      }
    );
  }

  groupByThree(array: Esperienza[]): Esperienza[][] {
    const groupedArray = [];
    for (let i = 0; i < array.length; i += 3) {
      groupedArray.push(array.slice(i, i + 3));
    }
    return groupedArray;
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
}
