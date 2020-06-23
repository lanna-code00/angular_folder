import { DefaultService } from './../default.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  public defcoach;
  public defclub;
  public defplayer1;
  public defplayer2;
  public defplayer3;
  public defplayer4;
  public defplayer5;
  public defplayer6;
  public defplayer7;
  public defplayer8;
  public defplayer9;
  public defplayer10;
  public defplayer11;
  public defcaptain;
  public defasstcaptain;
  public defbencher1;
  public defbencher2;
  public defbencher3;
  public defbencher4;
  public defkeeper;
  
  constructor(public def: Router, public defaultRout: DefaultService) { }

  // public teams = [];

  ngOnInit() {
    // this.loadteams();
    this.defcoach = this.defaultRout.name.coachname;
    // console.log(this.defaultRout.name.coachname);
    this.defclub = this.defaultRout.clubs.clubname;
    this.defplayer1 = this.defaultRout.play1.player1name;
    this.defplayer2 = this.defaultRout.play2.player2name;
    this.defplayer3 = this.defaultRout.play3.player3name;
    this.defplayer4 = this.defaultRout.play4.player4name;
    this.defplayer5 = this.defaultRout.play5.player5name;
    this.defplayer6 = this.defaultRout.play6.player6name;
    this.defplayer7 = this.defaultRout.play7.player7name;
    this.defplayer8 = this.defaultRout.play8.player8name;
    this.defplayer9 = this.defaultRout.play9.player9name;
    this.defplayer10 = this.defaultRout.play10.player10name;
    this.defplayer11 = this.defaultRout.play11.player11name;
    this.defcaptain = this.defaultRout.captain.captainname;
    this.defasstcaptain = this.defaultRout.asstCaptain.asstcaptainname;
    this.defbencher1 = this.defaultRout.bench1.bench1name;
    this.defbencher2 = this.defaultRout.bench2.bench2name;
    this.defbencher3 = this.defaultRout.bench3.bench3name;
    this.defbencher4 = this.defaultRout.bench4.bench4name;
    this. defkeeper = this.defaultRout.keeper.teamkeeper;
  }

  viewcoach() {
    this.def.navigate(['/coach1profile']);
   }

   viewallplayer(){
    this.def.navigate(['/defaultplayerprofile']);
  }
  home(){
    this.def.navigate(['/home']);
  }

}
