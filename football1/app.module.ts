import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TeamoneComponent } from './teamone/teamone.component';
import { TeamtwoComponent } from './teamtwo/teamtwo.component';
import { CoachComponent } from './coach/coach.component';
import { PlayersoneComponent } from './playersone/playersone.component';
import { CaptainComponent } from './captain/captain.component';
import { TeamnameComponent } from './teamname/teamname.component';
import { BenchersComponent } from './benchers/benchers.component';
import { CoachtwoComponent } from './coachtwo/coachtwo.component';
import { PlayerstwoComponent } from './playerstwo/playerstwo.component';
import { CaptaintwoComponent } from './captaintwo/captaintwo.component';
import { TeamnametwoComponent } from './teamnametwo/teamnametwo.component';
import { BencherstwoComponent } from './bencherstwo/bencherstwo.component';
import { Coach1profileComponent } from './coach1profile/coach1profile.component';
import { Coach2profileComponent } from './coach2profile/coach2profile.component';
import { PlayeroneprofileComponent } from './playeroneprofile/playeroneprofile.component';
import { PlayertwoprofileComponent } from './playertwoprofile/playertwoprofile.component';
import { GoalkeeperComponent } from './goalkeeper/goalkeeper.component';
import { AsstCaptainComponent } from './asst-captain/asst-captain.component';
import { DefaultComponent } from './default/default.component';
import { BothteamsComponent } from './bothteams/bothteams.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { DefaultplayerprofileComponent } from './defaultplayerprofile/defaultplayerprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TeamoneComponent,
    TeamtwoComponent,
    CoachComponent,
    PlayersoneComponent,
    CaptainComponent,
    TeamnameComponent,
    BenchersComponent,
    CoachtwoComponent,
    PlayerstwoComponent,
    CaptaintwoComponent,
    TeamnametwoComponent,
    BencherstwoComponent,
    Coach1profileComponent,
    Coach2profileComponent,
    PlayeroneprofileComponent,
    PlayertwoprofileComponent,
    GoalkeeperComponent,
    AsstCaptainComponent,
    DefaultComponent,
    BothteamsComponent,
    NavbarComponent,
    DefaultplayerprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
