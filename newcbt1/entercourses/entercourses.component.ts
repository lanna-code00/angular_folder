import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-entercourses',
  templateUrl: './entercourses.component.html',
  styleUrls: ['./entercourses.component.css']
})
export class EntercoursesComponent implements OnInit {
  public angForm;
  public coursess: [];
 sumitted = false;

  constructor(public fb: FormBuilder, public dataService: ApiService, public router: Router) {}

  ngOnInit(): void {
    this.loadcourses();
    this.angForm = this.fb.group({
      course : ['', Validators.required],
      questNo : ['', Validators.required]
      });
  }
  hideModal(){
    setTimeout(() =>{
      this.sumitted = false;
    }, 200);
  }

  showModal(){
    setTimeout(() => {
      this.sumitted = true;
    }, 100);
  }

  hidesModal(){
    setTimeout(() => {
      this.sumitted = false;
    }, 20);
  }

  loadcourses(){
    this.dataService.getcourse().subscribe(data =>{
      let tt = data;
      console.log(data);
      this.coursess = JSON.parse(JSON.stringify(tt));
    });
    // tslint:disable-next-line: no-unused-expression
   
  }
  // addItem() {
  //   this.coursess.push(this.course);
  //   // this.course = '';
  // }

// postdata()
// {
// this.dataService.getcourse();
// this.dataService.inputcourses(.value.course).subscribe(data => {
// console.log(data);
// });
// // tslint:disable-next-line: no-unused-expression
// location.reload();

// }

// postdata(){
//   let formValue = this.angForm.value;
//   this.dataService.getcourse();
   
//   this.dataService.inputcourses(formValue).subscribe(data =>{
//   console.log(data);
//   // this.router.navigate(['/portal/students']);
//   })

  
// }

postdata(){


  let formValue = this.angForm.value;
  this.dataService.getcourse();
   
  this.dataService.inputcourses(formValue).subscribe(data =>{
  console.log(data);
  this.loadcourses();
  // this.coursess.length + 1;
  });
}
get course() { return this.angForm.get('course'); }

}


