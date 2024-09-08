import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Competenza } from '../model/competenza';

@Injectable({
  providedIn: 'root'
})
export class CompetenzeService {

  private baseUrl = 'http://localhost:8080/api/v1/competenza';
  constructor(private http: HttpClient) { }

  getCompetenze():Observable<any>{
    return this.http.get(`${this.baseUrl}/competenze`)
  }

  inserisciCompetenza(competenza:Competenza):Observable<any>{
    return this.http.post(`${this.baseUrl}/inserisci`,competenza,{ withCredentials: true});
  }

  cancella(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/cancella/${id}`,{ withCredentials: true})
  }
}
