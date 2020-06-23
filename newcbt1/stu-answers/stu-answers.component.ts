import { Quizmodel } from './../users';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-stu-answers',
  templateUrl: './stu-answers.component.html',
  styleUrls: ['./stu-answers.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class StuAnswersComponent implements OnInit {
  // heroes: Quizmodel[];

  public answers: [];
  public options: [];
  question = {};

  constructor(private fb: FormBuilder, public service: ApiService, public rout: Router) { }

  ngOnInit(): void {
    this.loadquests();
  }


  loadquests(){
    this.service.getstudentsquestbycourseid(4).subscribe(list => {
      let ww = list;
      this.answers = JSON.parse(JSON.stringify(ww));
      console.log(ww);
    });
   
    // this.service.getoptions().subscribe(opts =>{
    //   let a = opts;
    //   this.options = JSON.parse(JSON.stringify(a));
    //   console.log(a);
    // })
    // this.service.getstudentsquest().subscribe(data=>{
    //   let yy = data;
    //   this.answers = JSON.parse(JSON.stringify(yy));
    //   console.log(this.answers);
    //   this.options = JSON.parse(JSON.stringify(yy));
    //   console.log(this.options);
    // })
  }



  // getHeroes(): void {
  //   this.service.getstudentsquest()
  //   .subscribe(heroes =>{
  //     let yy = heroes;
  //     this.answers = JSON.parse(JSON.stringify(yy));
  //     console.log(yy);
  //   });
  // }

}
