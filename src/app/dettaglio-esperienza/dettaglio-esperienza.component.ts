import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Esperienza } from '../model/esperienza';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dettaglio-esperienza',
  templateUrl: './dettaglio-esperienza.component.html',
  styleUrls: ['./dettaglio-esperienza.component.css']
})
export class DettaglioEsperienzaComponent {
  inserisciForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Esperienza,
    private fb: FormBuilder
  ) {
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
    }
  }
}
