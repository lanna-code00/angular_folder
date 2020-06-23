import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach1profile',
  templateUrl: './coach1profile.component.html',
  styleUrls: ['./coach1profile.component.css']
})
export class Coach1profileComponent implements OnInit {

  constructor( public back: Router ) { }

  ngOnInit() {
  }
  backtodef(){
  this.back.navigate(['/default']);
  }
}
