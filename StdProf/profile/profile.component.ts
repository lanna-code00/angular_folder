import { Component, OnInit } from '@angular/core';
import { AddStudentComponent } from '../add-student/add-student.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PortalService } from '../portal.service';
import { StudentsComponent } from '../students/students.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [StudentsComponent]
})
export class ProfileComponent implements OnInit {

  constructor(public std: StudentsComponent, public actroute: ActivatedRoute, public portal: PortalService ) { }
 
  public profile = [];
  public currentStudents;
  public student_id;

  ngOnInit() {
    this.portal.getStudent().subscribe(data=>{
      this.profile = JSON.parse(JSON.stringify(data));
      // console.log(this.profile);
      this.student_id = this.actroute.snapshot.params.id; 
      console.log(this.student_id);
      let y = this.profile.filter(stu => stu.id == this.student_id);
      this.currentStudents = y[0]
      console.log(y);
  }) 
  }
}
