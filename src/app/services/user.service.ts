import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/v1/user';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    window.sessionStorage.setItem("userdetails", JSON.stringify(user));
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.http.get(`${this.baseUrl}/login`, { headers, withCredentials: true,responseType: 'json' });
  }

}
