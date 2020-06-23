import { EntercoursesComponent } from './../entercourses/entercourses.component';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { of, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-setquest',
  templateUrl: './setquest.component.html',
  styleUrls: ['./setquest.component.css'],
  providers: [EntercoursesComponent]
})
export class SetquestComponent implements OnInit {
// submitted = false;
 public myquest;
 public papertype = '';
 public question = '';
 public optionA = '';
 public optionB = '';
 public optionC = '';
 public optionD  = '';
 public correctans = '';
 public marks = '';
 public questArr = [];
 public setquests = [];
 public options = [];
  constructor(public rout: Router, public service: ApiService, public fb: FormBuilder,
              public entercourse: EntercoursesComponent) {
   
   }


  ngOnInit(): void {
    this.loadquestions();
    this.myquest = this.fb.group({
      papertype: '',
      question: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctans: '',
      marks: '',
     });
    
    
  }

  loadquestions() {
    this.service.getquest().subscribe(data =>{
      let tt = data;
      this.questArr = JSON.parse(JSON.stringify(tt));
      // console.table(this.questArr)
      console.log(this.questArr)
      // this.coursess = JSON.parse(JSON.stringify(tt));
    });

    this.service.getcourse().subscribe(list =>{
      let ww = list;
      this.setquests = JSON.parse(JSON.stringify(ww));
      console.log(this.setquests);
    });
  
  }

  
submitquest() {
    let myquestion = this.myquest.value;
    this.service.getquest();
    // this.service.getcourse();
    this.service.setquest(myquestion).subscribe(data =>{
    console.log(data);
    this.loadquestions();
  });

    // this.question = '';
    // this.optionA = '';
    // this.optionB = '';
    // this.optionC = '';
    // this.optionD  = '';
    // this.correctans = '';
    // this.marks = '';
  }

}
