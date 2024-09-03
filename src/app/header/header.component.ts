import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private rotte:Router, public dialog: MatDialog){

  }

  areaRiservata() {
    // Naviga verso il percorso '/login'
    this.rotte.navigate(['/login']);
    };
  }

