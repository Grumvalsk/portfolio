import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Oauth2Service {

  constructor() { }

  loginWithGoogle(): void {
    const clientId = '841366050574-hd34fl2knl6aq416jrqln4dmo5ec20fj.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:4200/home-page';
    const scope = 'email profile openid';
    const responseType = 'token';
    const state = crypto.randomUUID(); // oppure un tuo valore

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
      `client_id=${clientId}` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&response_type=${responseType}` +
      `&scope=${encodeURIComponent(scope)}` +
      `&state=${state}`;

    window.location.href = authUrl;
  }

}
