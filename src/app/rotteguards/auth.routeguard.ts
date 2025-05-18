import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthActivateRouteGuard {

    constructor(private router: Router) {}

    private isTokenExpired(token: string | null): boolean {
        if (!token) return true;

        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const exp = payload.exp; // expiration timestamp

            if (!exp) return true;

            const currentTimestamp = Math.floor(Date.now() / 1000);
            return currentTimestamp > exp;
        } catch (e) {
            console.error("Token decoding failed:", e);
            return true;
        }
    }
  // Funzione per verificare la validità del token
checkTokenValidity(exp:string): boolean {
  if (exp) {
    const currentTime = new Date().getTime(); // ora corrente
    const elapsedTime = currentTime - parseInt(exp, 10); // differenza in millisecondi

    // 1 ora = 3600000 millisecondi
    if (elapsedTime < 3600000) {
      return true; // Il token è ancora valido (meno di un'ora)
    }else{
      return false;
    }
  }
  return false; // Token scaduto o assente
}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token=sessionStorage.getItem("token");
    const exp=sessionStorage.getItem("exp")
    if(!token&&!exp){
      this.router.navigate(['home-page'])
      return false;
     } else {
      if(exp&&this.checkTokenValidity(exp)){
       this.router.navigate(['area-riservata']);
       return true
      }else{
      this.router.navigate(['home-page'])
      return false
      }
    }
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(AuthActivateRouteGuard).canActivate(next, state);
}
