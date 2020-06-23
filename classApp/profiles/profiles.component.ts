import { Component, OnInit } from '@angular/core';
import { AddStudentComponent } from '../add-student/add-student.component';
import { ActivatedRoute } from '@angular/router';
import { PortalService } from '../portal.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
  providers:[AddStudentComponent]
})
export class ProfilesComponent implements OnInit {

  constructor(public std: AddStudentComponent, public actroute: ActivatedRoute, public portal: PortalService) { }
    public profiles = [];
    public crntStudents;
    public student_id;
  ngOnInit() {
   this.profiles = this.portal.students;
   this.student_id = this.actroute.snapshot.params.id;
  //  console.log(this.student_id)

  let y = this.profiles.filter(stu => stu.id == this.student_id);
  this.crntStudents = y[0]

  console.log(y);
  }

}
