import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AreaRiservataComponent } from './area-riservata/area-riservata.component';

const routes: Routes = [
  { path: 'home-page', component: HomepageComponent },
  { path: 'area-riservata', component: AreaRiservataComponent },
  { path: '**', redirectTo: 'home-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

