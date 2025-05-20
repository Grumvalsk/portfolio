import { Component, OnInit } from '@angular/core';
import { Esperienza } from '../model/esperienza';
import { MatDialog } from '@angular/material/dialog';
import { DescrizioneEsperienzaComponent } from '../descrizione-esperienza/descrizione-esperienza.component';
import { CompetenzeService } from '../services/competenze.service';
import { Competenza } from '../model/competenza';
import { PolicyComponent } from '../policy/policy.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  descrizione: any;
  presentazione: any;
  esperienze: any[] = [];
  competenze: Competenza[] = [];
  currentIndex: number = 0;
  intervalId: any; // Per tenere traccia dell'intervallo di animazione


  constructor(
    private competenzaService: CompetenzeService,
    public dialog: MatDialog,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    const flagPolicy = sessionStorage.getItem('letturaPolicy');

    if (flagPolicy === null || flagPolicy === undefined) {
      this.openDialogOnLoad();
      sessionStorage.setItem('letturaPolicy', 'true');
    }

    // ✅ Caricamento manuale dei file JSON da assets/esperienze
    const jsonFiles = ['almaviva.json', 'nttdata.json','renault.json'];
    const basePath = 'assets/esperienze/';

    jsonFiles.forEach(file => {
      this.http.get(`${basePath}${file}`).subscribe(
        data => {
          console.log('Caricamento di:', data);
          this.esperienze.push(data);
          this.updateCarousel();
        },
        error => {
          console.error(`Errore nel caricamento di ${file}:`, error);
        }
      );
    });
    const filesInformazioni = ['descrizione.json', 'presentazione.json'];
    const basePathInformazioni = 'assets/informazioni/';
    filesInformazioni.forEach(file => {
      this.http.get(`${basePathInformazioni}${file}`).subscribe(
        data => {
          console.log(`Caricamento di INFORMAZIONI da ${file}:`, data);

          if (file === 'descrizione.json') {
            // Fai qualcosa di specifico per descrizione.json
            this.descrizione = data;
          } else if (file === 'presentazione.json') {
            // Fai qualcosa di specifico per presentazione.json
            this.presentazione = data;
          }

          this.updateCarousel(); // Se vuoi aggiornare comunque il carosello
        },
        error => {
          console.error(`Errore nel caricamento di ${file}:`, error);
        }
      );
    });

    // Altri caricamenti
    // this.informazioniService.getInformazioni().subscribe(
    //   data => this.informazioni = data,
    //   error => console.error('Errore durante il recupero delle informazioni:', error)
    // );

    this.competenzaService.getCompetenze().subscribe(
      data => {
        this.competenze = data;
        this.startSliderAnimation();
      },
      error => console.error('Errore durante il recupero delle competenze:', error)
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
      data: esperienza,
       panelClass: 'dialog-custom'
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

  openDialogOnLoad(): void {
    this.dialog.open(PolicyComponent, {
      width: '400px', // Puoi specificare la larghezza della dialog
      data: {
        message: 'Benvenuto nella homepage!' // Puoi passare dati alla dialog se necessario
      }
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
