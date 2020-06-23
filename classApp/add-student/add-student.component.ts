import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortalService } from '../portal.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  public students = [];

  constructor(public routingLibrary: Router, public portal: PortalService) { }
  

  ngOnInit() {
     this.loadStudents();
  
    // this.students = this.portal.getStudent();
  }
  loadStudents(){
    this.portal.getStudent().subscribe(data =>{
      this.students = data;
    })
  }
  
  viewProfile(student_id){
    // console.log(student_id);
    this.routingLibrary.navigate(['/portal/profile/'+student_id])
  }
  delStudent(st_id){
    this.portal.delStudent(st_id);
    this.loadStudents();
  }
}
