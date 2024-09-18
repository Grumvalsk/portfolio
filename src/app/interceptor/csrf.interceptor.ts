import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../user';


@Injectable()
export class CsrfInterceptor implements HttpInterceptor {

  user = new User();
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const ignoredUrls = ["/api/v1/informazioni/recupera", "/api/v1/esperienza/esperienze","/api/v1/competenza/competenze"]; // Elenco degli URL da ignorare
    // Controlla se è una richiesta GET e se l'URL corrisponde a quelli da ignorare
    if (req.method === 'GET' && ignoredUrls.some(url => req.url.includes(url))) {
      return next.handle(req); // Ignora l'intercettazione e continua
    }

    let httpHeaders = new HttpHeaders();
    if (sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
    if (this.user && this.user.password && this.user.email) {
      httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(this.user.email + ':' + this.user.password));
    }
    let xsrf = sessionStorage.getItem("XSRF-TOKEN");
    if (xsrf) {
      httpHeaders = httpHeaders.append('X-XSRF-TOKEN', xsrf);
    }
    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = req.clone({
      headers: httpHeaders
    });
    return next.handle(xhr).pipe(tap(
      (event: HttpEvent<any>) => {
        // Gestisci gli eventi qui se necessario
      },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          this.router.navigate(['home-page']);
        }
      }
    ));
  }
}
