import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortalService } from '../portal.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students = [];

  constructor(public routingLibrary: Router, public portal: PortalService) { }

  ngOnInit() {
    this.loadStudents();
    // this.portal.contactEndpoint().subscribe(data=>{
    // console.log(data);
    // })
  }

  loadStudents(){
    this.portal.getStudent().subscribe(data =>{
      let tt = data;
      this.students = JSON.parse(JSON.stringify(tt));
    });
  }

  viewProfile(student_id) {
    // console.log(student_id);
    this.routingLibrary.navigate(['/portal/profile/' + student_id]);
  }

  delStudent(value){
    // this.portal.delStudent(st_id);
    this.portal.delStudent(value).subscribe(data => {
      // let kk = data; 
      // this.students = JSON.parse(JSON.stringify(kk));
    this.loadStudents();

    });
   }
}
