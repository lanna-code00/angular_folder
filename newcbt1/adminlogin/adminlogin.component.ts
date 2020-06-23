import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  angForm: FormGroup;

  constructor(public router: Router, public fb: FormBuilder, public dataService: ApiService) {
    this.angForm = this.fb.group({
      identification: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  postdata(angForm1) {
    this.dataService.adminlogin(angForm1.value.identification, angForm1.value.password)
    .pipe(first())
    .subscribe(
    data => {
    const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/adminsidebar';
    this.router.navigate([redirect]);
    },
    error => {
    alert('User name or password is incorrect');
    });
    }
    get identification() { return this.angForm.get('identification'); }
    get password() { return this.angForm.get('password'); }
}
