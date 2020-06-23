import { Component, OnInit } from '@angular/core';
import { PortalService } from '../portal.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(public portal: PortalService) { }

  public fname = '';
  public lname = '';
  public email = '';
  public phone = '';
  public arrt = [];

  ngOnInit() {
  }

  submite(){
    this.portal.getStudent().subscribe(data =>{
    this.arrt = data;
    var details = {id: this.arrt.length + 1,firstname: this.fname, lastname: this.lname, email: this.email, phone: this.phone};
    this.portal.addStudent(details);
  })
  }
}
