import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Informazioni } from '../model/informazioni';

@Injectable({
  providedIn: 'root'
})
export class InformazioniService {
  private baseUrl = 'http://localhost:8080/api/v1/informazioni';

  constructor(private http: HttpClient) {}

  getInformazioni():Observable<any>{
    return this.http.get(`${this.baseUrl}/recupera`);
  }

  inserisciInformazione(informazione:Informazioni):Observable<any>{
    return this.http.post(`${this.baseUrl}/inserisci`,informazione);
  }

}

