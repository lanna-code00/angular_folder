import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teamtwo',
  templateUrl: './teamtwo.component.html',
  styleUrls: ['./teamtwo.component.css']
})
export class TeamtwoComponent implements OnInit {

  constructor(public hometwo: Router ) { }

  ngOnInit() {
  }
  back_to_home_two(){
    this.hometwo.navigate(['/home'])
  }
}
