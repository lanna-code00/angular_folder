import { DefaultplayerprofileComponent } from './defaultplayerprofile/defaultplayerprofile.component';
import { Coach1profileComponent } from './coach1profile/coach1profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TeamoneComponent } from './teamone/teamone.component';
import { TeamtwoComponent } from './teamtwo/teamtwo.component';
import { DefaultComponent } from './default/default.component';
import { BothteamsComponent } from './bothteams/bothteams.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'teamone', component: TeamoneComponent},
  {path: 'teamtwo', component: TeamtwoComponent},
  {path: 'default', component: DefaultComponent},
  {path: 'bothteams', component: BothteamsComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'coach1profile', component: Coach1profileComponent},
  {path: 'defaultplayerprofile', component: DefaultplayerprofileComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
