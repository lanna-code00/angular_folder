import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public lib: Router, public login: LoginService) { }

 public username = '';
 public email = '';
 public password = '';
 public confirm = '';
 public ty = [];

  ngOnInit() {
  }



  submite(){
     this.lib.navigate(['/home'])
  }
  
}
