import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  constructor(public http: HttpClient) { }
//   public students = [
//     {id: 1, firstname: 'Maryann', lastname: 'Ezeobidi',  phone: '0907777666', email: 'maryann@yahoo.com'},
//     {id: 2, firstname: 'Rhoda', lastname: 'Anuoluwapo',  phone: '789666767', email: 'Rhoda@yahoo.com'}
// ]
// contactEndpoint(){
//   let children = ['Joshua', 'Maryann', 'Favour'];
//   return this.http.post('/request/students.php', children);
// }
getStudent(){
  return this.http.get<any>('/request/students.php');

  // return of(this.students);
  // return this.students;
}
addStudent(tyy){
  // this.students.push(student);
  return this.http.post('/request/add-student.php', tyy);

}
delStudent(id){
  // let Index = this.students.findIndex(st => st.id == id);
  // this.students.splice(Index, 1);
  return this.http.post('/request/delStdent.php', id);

}
}
