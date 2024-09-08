import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { User } from 'portfolio/src/model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user:User=new User();

  constructor(private rotte:Router, public dialog: MatDialog){

  }

  areaRiservata() {
    if(sessionStorage.getItem('userdetails')){
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
      if(this.user.email.length===0){
        this.rotte.navigate(['login']);
      }else{
        this.rotte.navigate(['area-riservata']);
      }
    }else{
      this.rotte.navigate(['login']);
    };
  }
}

