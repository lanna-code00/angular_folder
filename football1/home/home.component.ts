import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public teamone: Router) { }

  ngOnInit() {
  }
  backtoteamone(){
    this.teamone.navigate(['/teamone']);
  }
  backtoteamtwo(){
    this.teamone.navigate(['/teamtwo']);
  }
  go_to_default(){
    this.teamone.navigate(['/default'])
  }
}
