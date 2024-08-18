import { Component, OnInit } from '@angular/core';
import { EsperienzeService } from '../services/esperienze.service';
import { Esperienza } from '../model/esperienza';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  esperienze: Esperienza[] = [];
  groupedEsperienze: Esperienza[][] = []; // Raggruppiamo le esperienze in gruppi di tre

  constructor(private service: EsperienzeService) {}

  ngOnInit(): void {
    this.service.getEsperienze().subscribe(
      data => {
        this.esperienze = data;
        this.groupedEsperienze = this.groupByThree(this.esperienze); // Raggruppa le esperienze in array di tre
        console.log('Esperienze raggruppate:', this.groupedEsperienze);
      },
      error => {
        console.error('Errore durante il recupero delle esperienze:', error);
      }
    );
  }

  // Metodo per suddividere l'array in gruppi di tre
  groupByThree(array: Esperienza[]): Esperienza[][] {
    const groupedArray = [];
    for (let i = 0; i < array.length; i += 3) {
      groupedArray.push(array.slice(i, i + 3));
    }
    return groupedArray;
  }

  dettaglioEsperienza(esperienza: Esperienza): void {
    // Logica per aprire un dialog o navigare ai dettagli dell'esperienza
    console.log('Esperienza selezionata:', esperienza);
  }
}
