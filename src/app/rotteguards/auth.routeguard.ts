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

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      debugger
        const token = sessionStorage.getItem('Authorization');

        if (!token || this.isTokenExpired(token)) {
          sessionStorage.removeItem("Authorization")
            this.router.navigate(['home-page']);
            return false;
        }

        return true;
    }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(AuthActivateRouteGuard).canActivate(next, state);
}
