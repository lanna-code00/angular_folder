import { Component, OnInit } from '@angular/core';
import { PortalService } from '../portal.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

public studentForm;
  public fname = '';
  public lname = '';
  public email = '';
  public phone = '';
  public arrt  = [];

  constructor( public portal: PortalService, public routinglib: Router, public formes: FormBuilder) { }
 

  ngOnInit() {
    this.studentForm = this.formes.group({
      fname:  ['', Validators.required],
      lname: '',
      email: '',
      phone: ''
     });
  }

  // submitStudentProfile(){
    // let formValue = this.studentForm.value;
  //  let members = new FormData();
  //  members.append('fname', this.fname);
  //  members.append('lname', this.lname);
  //  members.append('email', this.email);
  //  members.append('phone', this.phone);
  //  this.portal.addStudent(members).subscribe(data=>{
      // this.members=data;
    //  console.log(members);
    //  JSON.parse(JSON.stringify(mem));
    //  console.log(data);
  //  })
    // if(this.studentForm.valid){
    //   console.log('valid');
    // }
    // else{
    //   console.log('invalid')
    // }
  // console.log (formValue);
      // this.portal.getStudent().
    //   let details = {firstname: this.fname, lastname: this.lname, email: this.email, phone: this.phone};
    //   this.portal.addStudent(details).subscribe(data =>{
    //  console.log(data);
    //   this.routinglib.navigate(['/portal/students'])
    // })
  // }
  // }

  submitStudentProfile(){
    let formValue = this.studentForm.value;
    this.portal.getStudent();
     
    this.portal.addStudent(formValue).subscribe(data =>{
    console.log(data);
    this.routinglib.navigate(['/portal/students']);
    })

    
  }

}
