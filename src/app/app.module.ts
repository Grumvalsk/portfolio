import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AreaRiservataComponent } from './area-riservata/area-riservata.component';
import { DettaglioEsperienzaComponent } from './dettaglio-esperienza/dettaglio-esperienza.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // Importa MatInputModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    AreaRiservataComponent,
    DettaglioEsperienzaComponent,
  ],
  imports: [
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule, // Aggiungi MatInputModule agli imports
    HttpClientModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
