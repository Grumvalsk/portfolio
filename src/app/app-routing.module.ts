import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AreaRiservataComponent } from './area-riservata/area-riservata.component';
import { LoginComponent } from './login/login.component';
import { AreaRiservataEsperienzeComponent } from './area-riservata-esperienze/area-riservata-esperienze.component';
import { AreaRiservataInformazioniComponent } from './area-riservata-informazioni/area-riservata-informazioni.component';

const routes: Routes = [
  { path: 'home-page', component: HomepageComponent },
  { path: 'area-riservata', component: AreaRiservataComponent },
  { path: 'login', component:LoginComponent},
  // { path: 'area-riservata-esperienze',component:AreaRiservataEsperienzeComponent},
  // { path: 'area-riservata-informazioni', component:AreaRiservataInformazioniComponent},
  { path: '**', redirectTo: 'home-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
