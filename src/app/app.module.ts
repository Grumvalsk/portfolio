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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AreaRiservataEsperienzeComponent } from './area-riservata-esperienze/area-riservata-esperienze.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AreaRiservataInformazioniComponent } from './area-riservata-informazioni/area-riservata-informazioni.component';
import { DettaglioInformazioneComponent } from './dettaglio-informazione/dettaglio-informazione.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    AreaRiservataComponent,
    DettaglioEsperienzaComponent,
    AreaRiservataEsperienzeComponent,
    AreaRiservataInformazioniComponent,
    DettaglioInformazioneComponent,
  ],
  imports: [
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule, // Aggiungi MatInputModule agli imports
    HttpClientModule,
    FormsModule,
    MatTabsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
