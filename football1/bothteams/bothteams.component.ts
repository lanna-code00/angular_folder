import { FooballService } from './../fooball.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bothteams',
  templateUrl: './bothteams.component.html',
  styleUrls: ['./bothteams.component.css']
})
export class BothteamsComponent implements OnInit {

   public teams = [];

  constructor(public backhome: Router, public port: FooballService) { }

  ngOnInit() {
  }
 
}
