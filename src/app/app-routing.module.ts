import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AreaRiservataComponent } from './area-riservata/area-riservata.component';
import { LoginComponent } from './login/login.component';
import { AuthActivateRouteGuard } from './rotteguards/auth.routeguard';


const routes: Routes = [
  { path: 'home-page', component: HomepageComponent },
  { path: 'area-riservata', component: AreaRiservataComponent,canActivate: [AuthActivateRouteGuard] },
  { path: 'login', component:LoginComponent},

  { path: '**', redirectTo: 'home-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
