import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Esperienza } from '../model/esperienza';

@Injectable({
  providedIn: 'root'
})
export class EsperienzeService {

  private baseUrl = 'http://localhost:8080/api/v1/esperienza'; // URL base aggiornata

  constructor(private http: HttpClient) {}

  getEsperienze(): Observable<any> {
    return this.http.get(`${this.baseUrl}/esperienze`); // Completamento dell'URL
  }

  inserisciEsperienza(esperienza:Esperienza):Observable<any>{
    return this.http.post(`${this.baseUrl}/inserisci`,esperienza);
  }

  aggiornaEsperienza(esperienza:Esperienza):Observable<any>{
    return this.http.post(`${this.baseUrl}/aggiorna`,esperienza);
  }

  cancella(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/cancella/${id}`)
  }
}
