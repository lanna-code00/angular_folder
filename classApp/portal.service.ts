import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  constructor() { }

  public students = [
    {id:1,firstname: 'Maryann', phone: '0907777666', email:'maryann@yahoo.com'},
  {id:2,firstname: 'Rhoda', phone: '789666767', email:'Rhoda@yahoo.com'}
]

getStudent(){
  return of(this.students);
  // return this.students;
}
addStudent(student){
  this.students.push(student);
}
delStudent(id){
  let Index = this.students.findIndex(st => st.id ==id)
  this.students.splice(Index, 1);
}
}
