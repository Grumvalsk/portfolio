import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Esperienza } from '../model/esperienza';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { EsperienzeService } from '../services/esperienze.service';
import { Tecnologia } from '../model/tecnologia';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-dettaglio-esperienza',
  templateUrl: './dettaglio-esperienza.component.html',
  styleUrls: ['./dettaglio-esperienza.component.css']
})
export class DettaglioEsperienzaComponent {
  inserisciForm: FormGroup;
  esperienza!:Esperienza;
  inseriemnto:boolean=false

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Esperienza,
    private fb: FormBuilder,
    private esperienzaService:EsperienzeService,
    private dialogRef: MatDialogRef<DettaglioEsperienzaComponent>
  ) {

    this.esperienza = { id: 0, nomeProgetto: '', nomeAzienda: '', dataInizio: '', dataFine: '', descrizione: '', tecnologie: [], immagineUrl:'' };


    if(data===undefined){
      this.inseriemnto=true;
      this.inserisciForm = this.fb.group({
        nomeProgetto: ['', Validators.required],
        nomeAzienda: ['', Validators.required],
        dataInizio: ['', Validators.required],
        dataFine: ['', Validators.required],
        descrizione: ['', Validators.required],
        immagineUrl: ['', Validators.required],
        tecnologie: this.buildTecnologie()
      });
   }else{
      this.inserisciForm = this.fb.group({
        nomeProgetto: [data.nomeProgetto, Validators.required],
        nomeAzienda: [data.nomeAzienda, Validators.required],
        dataInizio: [data.dataInizio, Validators.required],
        dataFine: [data.dataFine, Validators.required],
        descrizione: [data.descrizione, Validators.required],
        immagineUrl:[data.immagineUrl, Validators.required],
        tecnologie: this.buildTecnologie()
      });
    }
  }

  buildTecnologie(): FormArray {
    return this.fb.array(
      this.data?.tecnologie?.map(tecnologia => this.fb.group({
        nome: [tecnologia.nome, Validators.required],
        versione: [tecnologia.versione, Validators.required]
      })) || []
    );
  }

  get tecnologieArray(): FormArray {
    return this.inserisciForm.get('tecnologie') as FormArray;
  }

  aggiungi() {
    const nuovaTecnologia: FormGroup = this.fb.group({
      nome: ['', Validators.required],
      versione: ['', Validators.required]
    });
    this.tecnologieArray.push(nuovaTecnologia);
  }

  rimuovi(id:number){
    this.tecnologieArray.removeAt(id);
  }

  aggiorna() {
    if (this.inserisciForm.valid) {
      const formValues = this.inserisciForm.value;
      console.log(formValues);
      this.esperienza.id=this.data.id
      this.esperienza.nomeProgetto=this.inserisciForm.value.nomeProgetto;
      this.esperienza.nomeAzienda=this.inserisciForm.value.nomeAzienda;
      this.esperienza.dataInizio=this.inserisciForm.value.dataInizio;
      this.esperienza.dataFine=this.inserisciForm.value.dataFine;
      this.esperienza.descrizione=this.inserisciForm.value.descrizione;
      this.esperienza.immagineUrl=this.inserisciForm.value.immagineUrl;
      this.esperienza.tecnologie=this.inserisciForm.value.tecnologie;

      this.esperienzaService.aggiornaEsperienza(this.esperienza).subscribe(
        (response: HttpResponse<any>) => {
          debugger
          console.log(response);
            this.dialogRef.close();
        },
        (error: any) => {
          console.error(error.error);
        }
      );

    }
  }

  inserisci() {
    if (this.inserisciForm.valid) {
      const formValues = this.inserisciForm.value;
      this.esperienza.nomeProgetto=this.inserisciForm.value.nomeProgetto;
      this.esperienza.nomeAzienda=this.inserisciForm.value.nomeAzienda;
      this.esperienza.dataInizio=this.inserisciForm.value.dataInizio;
      this.esperienza.dataFine=this.inserisciForm.value.dataFine;
      this.esperienza.descrizione=this.inserisciForm.value.descrizione;
      this.esperienza.tecnologie=this.inserisciForm.value.tecnologie

      this.esperienzaService.inserisciEsperienza(this.esperienza).subscribe(
        (response: HttpResponse<any>) => {
          if (response.status === 201) {
            this.dialogRef.close();
          }
        },
        (error: any) => {
          console.log(error.error);
        }
      );

    }
  }
}
