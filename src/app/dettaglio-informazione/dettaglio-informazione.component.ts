import { Component, Inject } from '@angular/core';
import { Informazioni } from '../model/informazioni';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DettaglioInformazione } from '../model/dettaglio-informazione';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformazioniService } from '../services/informazioni.service';

@Component({
  selector: 'app-dettaglio-informazione',
  templateUrl: './dettaglio-informazione.component.html',
  styleUrls: ['./dettaglio-informazione.component.css']
})
export class DettaglioInformazioneComponent {
  inserisciForm: FormGroup;
  informazione:Informazioni= new Informazioni()

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DettaglioInformazione,
    private fb: FormBuilder,
    private informazioniService:InformazioniService
  ){
     console.log(data);
     if(data===undefined){
      this.inserisciForm=this.fb.group({
        descrizione:['',Validators.required],
        immagine:['',Validators.required]
      })
     }else{
      this.inserisciForm=this.fb.group({
        descrizione:[data.descrizione,Validators.required],
        immagine:[data.immagine, Validators.required]
      })
     }

  }

  inserisci(){
    if(this.inserisciForm.valid){
      const value=this.inserisciForm.value;
      if(this.data.flgIntroduzione){
          this.informazione.immagineIntroduzione=this.inserisciForm.value.immagine
          this.informazione.introduzione=this.inserisciForm.value.descrizione
      }else{
        this.informazione.immaginePresentazione=this.inserisciForm.value.immagine
        this.informazione.presentazione=this.inserisciForm.value.descrizione
      }
      this.informazioniService.inserisciInformazione(this.informazione).subscribe(
        data => {
         console.log("Inserimento Effettuato con successo")
        },
        error => {
          console.error('Errore durante l inserimento:', error);
        }
      );



    }
  }
}
