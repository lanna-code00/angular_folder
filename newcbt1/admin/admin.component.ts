import { ApiService } from './../api.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
angForm: FormGroup;
constructor(public router: Router, public dataService: ApiService, public fb: FormBuilder) { 
  this.angForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
    password: ['', Validators.required],
    name: ['', Validators.required],
    identification: ['', Validators.required],
    });
}

  ngOnInit(): void {
  }

postdata(angForm1)
{
this.dataService.adminreg(angForm1.value.name, angForm1.value.email, angForm1.value.identification, angForm1.value.password)
.pipe(first())
.subscribe(
data => {
this.router.navigate(['adminlogin']);
},

error => {
});
}

get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }
get name() { return this.angForm.get('name'); }
get identification() { return this.angForm.get('identification'); }

}
