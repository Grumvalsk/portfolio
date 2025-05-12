import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { User } from '../user';
import { Oauth2Service } from '../oauth-2.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isShrunk = false;
  user: User = new User();

  constructor(private rotte: Router, public dialog: MatDialog,private googleService:Oauth2Service,private route: ActivatedRoute) {}
  ngOnInit(): void {
    console.log("URL "+this.route.paramMap)
    this.route.paramMap.subscribe(params => {
      const access_token = params.get('access_token');
      if(access_token){
        const currentTime = new Date().getTime()+""; // ottieni il timestamp corrente
        sessionStorage.setItem("token",access_token)
        sessionStorage.setItem('exp',currentTime)
      console.log('Parametro di rotta id:', access_token);
      }
    });  }

  areaRiservata() {
    debugger
    const token=sessionStorage.getItem("token");
    const exp=sessionStorage.getItem("exp")
    if(!token&&!exp){
    this.googleService.loginWithGoogle();
     } else {
      if(exp&&this.checkTokenValidity(exp)){
       this.rotte.navigate(['area-riservata']);
      }else{
        this.googleService.loginWithGoogle();

      }

  }
}

  // Aggiunta la logica per gestire lo scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isShrunk = scrollPosition > 100;
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


}
