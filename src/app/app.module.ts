import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from '@coreui/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { provideHttpClient } from '@angular/common/http';
import { AreaRiservataComponent } from './area-riservata/area-riservata.component';
import { DettaglioEsperienzaComponent } from './dettaglio-esperienza/dettaglio-esperienza.component';
import {MatFormFieldModule} from '@angular/material/form-field';// Importa il componente

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    AreaRiservataComponent,
    DettaglioEsperienzaComponent, // Dichiara il componente qui
  ],
  imports: [

    AppRoutingModule,
    CarouselModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    BrowserModule,
    MatFormFieldModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
