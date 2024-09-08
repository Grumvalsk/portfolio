import { Component, Inject } from '@angular/core';
import { Informazioni } from '../model/informazioni';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  immagineBase64: string = ''; // Stringa base64 per l'immagine


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DettaglioInformazione,
    private fb: FormBuilder,
    private informazioniService:InformazioniService,
    private dialogRef: MatDialogRef<DettaglioInformazione>
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

      if(this.data.flgIntroduzione){
          this.informazione.immagineIntroduzione=this.immagineBase64
          this.informazione.introduzione=this.inserisciForm.value.descrizione
      }else{
        this.informazione.immaginePresentazione=this.immagineBase64
        this.informazione.presentazione=this.inserisciForm.value.descrizione
      }
      this.informazioniService.inserisciInformazione(this.informazione).subscribe(
        data => {
         console.log("Inserimento Effettuato con successo")
         this.dialogRef.close();
        },
        error => {
          console.error('Errore durante l inserimento:', error);
        }
      );

    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      const reader = new FileReader();
      reader.onload = () => {
        this.immagineBase64 = reader.result as string;
        if(this.data.flgIntroduzione){ // Converti l'immagine in base64
        this.inserisciForm.patchValue({
          immagineIntroduzione: this.immagineBase64 // Aggiorna il form con l'immagine base64
        });
       }else{
        this.inserisciForm.patchValue({
          immaginePresentazione: this.immagineBase64 // Aggiorna il form con l'immagine base64
        });
       }
      };
      reader.readAsDataURL(file);
    } else {
      console.error('Formato non supportato. Solo JPG e PNG sono accettati.');
    }
  }
}
