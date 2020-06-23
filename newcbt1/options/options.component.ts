import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {


  constructor(public router: Router, public dataService: ApiService) { }

  ngOnInit(): void {
    // this.loadcourses();
  }

//   loadcourses(){
//     this.dataService.getcourse().subscribe(data =>{
//       let tt = data;
//       this.coursess = JSON.parse(JSON.stringify(tt));
//     });
//   }
}
