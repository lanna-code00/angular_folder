import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
   public me = "MARYANN AND RHODA";
  ngOnInit() {
  
  }

  changeName(){
    this.me = "ONLY MARYANN";
  }

}
