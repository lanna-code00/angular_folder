import { FooballService } from './../fooball.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teamone',
  templateUrl: './teamone.component.html',
  styleUrls: ['./teamone.component.css']
})
export class TeamoneComponent implements OnInit {

  constructor(public home: Router, public port: FooballService) { }

  public club1 = '';
  public coach1 = '';
  public player1 = '';
  public player2 = '';
  public player3 = '';
  public player4 = '';
  public player5 = '';
  public player6 = '';
  public player7 = '';
  public player8 = '';
  public player9 = '';
  public player10 = '';
  public player11 = '';
  public captain1 = '';
  public asstCaptain1 = '';
  public bencher1 = '';
  public benchers2 = '';
  public benchers3 = '';
  public keeper1 = '';
 ngOnInit() {
  }


}
