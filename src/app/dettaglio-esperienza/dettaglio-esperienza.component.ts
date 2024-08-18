import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Esperienza } from '../model/esperienza';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { EsperienzeService } from '../services/esperienze.service';

@Component({
  selector: 'app-dettaglio-esperienza',
  templateUrl: './dettaglio-esperienza.component.html',
  styleUrls: ['./dettaglio-esperienza.component.css']
})
export class DettaglioEsperienzaComponent {
  inserisciForm: FormGroup;
  esperienza!:Esperienza;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Esperienza,
    private fb: FormBuilder,
    private esperienzaService:EsperienzeService
  ) {
    this.esperienza = { id: 0, nomeProgetto: '', nomeAzienda: '', dataInizio: '', dataFine: '', descrizione: '', tecnologie: [] };
    this.inserisciForm = this.fb.group({
      nomeProgetto: [data.nomeProgetto, Validators.required],
      nomeAzienda: [data.nomeAzienda, Validators.required],
      dataInizio: [data.dataInizio, Validators.required],
      dataFine: [data.dataFine, Validators.required],
      descrizione: [data.descrizione, Validators.required],
      tecnologie: this.buildTecnologie()
    });
  }

  buildTecnologie(): FormArray {
    return this.fb.array(
      this.data.tecnologie.map(tecnologia => this.fb.group({
        nome: [tecnologia.nome, Validators.required],
        versione: [tecnologia.versione, Validators.required]
      }))
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

  onSubmit() {
    if (this.inserisciForm.valid) {
      const formValues = this.inserisciForm.value;
      console.log(formValues);
      this.esperienza.id=this.data.id
      this.esperienza.nomeProgetto=this.inserisciForm.value.nomeProgetto;
      this.esperienza.nomeAzienda=this.inserisciForm.value.nomeAzienda;
      this.esperienza.dataInizio=this.inserisciForm.value.dataInizio;
      this.esperienza.dataFine=this.inserisciForm.value.dataFine;
      this.esperienza.descrizione=this.inserisciForm.value.descrizione;
      this.esperienza.tecnologie=this.inserisciForm.value.tecnologie

      this.esperienzaService.aggiornaEsperienza(this.esperienza).subscribe(
        data => {
         console.log("Modifica Effettuata con successo")
        },
        error => {
          console.error('Errore durante la modifica:', error);
        }
      );

    }
  }
}
