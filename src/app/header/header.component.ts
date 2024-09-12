import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isShrunk = false;
  user: User = new User();

  constructor(private rotte: Router, public dialog: MatDialog) {}

  areaRiservata() {
    if (sessionStorage.getItem('Authorization')) {
        this.rotte.navigate(['area-riservata']);
    } else {
      this.rotte.navigate(['login']);
    }
  }

  // Aggiunta la logica per gestire lo scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isShrunk = scrollPosition > 100;
  }
}
