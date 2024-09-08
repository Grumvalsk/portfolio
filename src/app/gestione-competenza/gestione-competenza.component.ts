import { Component, Inject } from '@angular/core';
import { Competenza } from '../model/competenza';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CompetenzeService } from '../services/competenze.service';
import { DettaglioInformazioneComponent } from '../dettaglio-informazione/dettaglio-informazione.component';
import { Informazioni } from '../model/informazioni';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestione-competenza',
  templateUrl: './gestione-competenza.component.html',
  styleUrls: ['./gestione-competenza.component.css']
})
export class GestioneCompetenzaComponent {

immagineBase64: string = '';
inserisciForm: FormGroup;
competenza:Competenza= new Competenza();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Competenza,
    private competenzaService:CompetenzeService,
    public dialog: MatDialog,
    private fb:FormBuilder,
    private dialogRef: MatDialogRef<GestioneCompetenzaComponent>
  ){
    if(data===undefined){
      this.inserisciForm=this.fb.group({
        nome:['',Validators.required],
        immagine:['',Validators.required]
      })
    }else{
      this.inserisciForm=this.fb.group({
        nome:[this.competenza.nome,Validators.required],
        immagine:[this.competenza.immagine,Validators.required]
      })
    }
  }

  inserisci(){
    if(this.inserisciForm.valid){
      this.competenza.immagine=this.immagineBase64;
      this.competenza.nome=this.inserisciForm.value.nome;
      this.competenzaService.inserisciCompetenza(this.competenza).subscribe(
        data=>{
          console.log("Inserimento avvenuto con successo");

        }

      )
      this.dialogRef.close();
    }

  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      const reader = new FileReader();
      reader.onload = () => {
        this.immagineBase64 = reader.result as string;
        // Converti l'immagine in base64
        this.inserisciForm.patchValue({
          immagine: this.immagineBase64 // Aggiorna il form con l'immagine base64
        });
      };
      reader.readAsDataURL(file);
    } else {
      console.error('Formato non supportato. Solo JPG e PNG sono accettati.');
    }
  }
}
