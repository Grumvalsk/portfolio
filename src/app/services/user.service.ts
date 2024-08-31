import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'portfolio/src/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/v1/user';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    // Includi { withCredentials: true } per assicurarti che i cookie vengano inviati e ricevuti
    return this.http.post(`${this.baseUrl}/login`, user, {
      observe: 'response',
      responseType: 'text',
      withCredentials: true  // Aggiungi questa linea
    });
  }
}
