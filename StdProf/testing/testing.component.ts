import { NewServiceService } from './../new-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor(private fb: FormBuilder, private newServ: NewServiceService) { }
  submitted = false;
  thanks=false;
  users:[];
  regData = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required]
    
  });
  get myemail(){ return this.regData.get('email'); }
  get myusername(){ return this.regData.get('username'); }
  get myphone(){ return this.regData.get('phone'); }


  ngOnInit() {
  }

  submit(){
    this.submitted=true;
    setTimeout(() => {
    this.submitted = false;
    this.thanks = true;
    this.regData.reset();
    }, 2000);

    
  }
 

}
 // getUser(){
  //   this.newServ.getNames().subscribe(data=>{
  //     if(data.success){
  //       this.users = data.message;
  //     }
  //     else{

  //     };
  //   })
  // }