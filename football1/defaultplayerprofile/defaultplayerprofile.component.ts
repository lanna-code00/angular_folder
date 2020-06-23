import { DefaultService } from './../default.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defaultplayerprofile',
  templateUrl: './defaultplayerprofile.component.html',
  styleUrls: ['./defaultplayerprofile.component.css']
})
export class DefaultplayerprofileComponent implements OnInit {

  constructor(public defplayers: Router, public defprofiles: DefaultService) { }

  public club;
  public playname1;
  public playname2;
  public playname3;
  public playname4;
  public playname5;
  public playname6;
  public playname7;
  public playname8;
  public playname9;
  public playname10;
  public playname11;
  public keepername;
  ngOnInit() {
    this.playname1 = this.defprofiles.play1.player1name;
    this.playname2 = this.defprofiles.play2.player2name;
    this.playname3 = this.defprofiles.play3.player3name;
    this.playname4 = this.defprofiles.play4.player4name;
    this.playname5 = this.defprofiles.play5.player5name;
    this.playname6 = this.defprofiles.play6.player6name;
    this.playname7 = this.defprofiles.play7.player7name;
    this.playname8 = this.defprofiles.play8.player8name;
    this.playname9 = this.defprofiles.play9.player9name;
    this.playname10 = this.defprofiles.play10.player10name;
    this.playname11 = this.defprofiles.play11.player11name;
    this.keepername = this.defprofiles.keeper.teamkeeper;
    this.club = this.defprofiles.clubs.clubname;
  }
  todefault(){
    this.defplayers.navigate(['/default']);
  }
}
