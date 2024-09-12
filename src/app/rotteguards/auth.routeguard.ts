import { Injectable,inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot,Router } from '@angular/router';
import { User } from '../user';



@Injectable()
export class AuthActivateRouteGuard {

    constructor(private router: Router){

    }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
        if(!sessionStorage.getItem('Authorization')){
            this.router.navigate(['home-page']);
        }

        return true;
    }

}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(AuthActivateRouteGuard).canActivate(next, state);
  }
