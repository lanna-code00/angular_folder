import { Setquest } from './setquest';
import { Injectable, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Users, Quizmodel } from './users';
import { Admin } from './admin';
import { Courses } from './courses';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

myarray: String[] = [];
i: number = 0;
languages = this.getcourse();
 newstr: String

 redirectUrl: string;
  // baseUrl = 'newcbt2/';
  public arr = [];
  baseUrl:string = 'http://localhost/newcbt2';
 @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }


 

//  public optiones(){
//     this.arr.push({optionA: 'optionA', optionB: 'optionB', optionC: 'optionC', optionD: 'optionD'});
//   }



  // loadquestions() {
  //   this.httpClient.get<any>(this.baseUrl + '/getquest.php').subscribe(data =>{
  //     let tt = data;
  //     this.questArr = JSON.parse(JSON.stringify(tt));
  //     // console.table(this.questArr)
  //     console.log(this.questArr)
  //     // this.coursess = JSON.parse(JSON.stringify(tt));
  //   });

  //   this.httpClient.get<any>(this.baseUrl + '/getcourses.php').subscribe(list =>{
  //     let ww = list;
  //     this.setquests = JSON.parse(JSON.stringify(ww));
  //     console.log(this.setquests);
  //   });
  
  // }
  
  selectQuestion(question) {
    this.selectedQuestion.next(question)
  }

  public userlogin(username, password) {
    return this.httpClient.post<any>(this.baseUrl + '/loginstudents.php', { username, password })
    // tslint:disable-next-line: no-shadowed-variable
    .pipe(map(Users => {
    this.setToken(Users [0].name);
    this.getLoggedInName.emit(true);
    return Users;
    }));
    }

   public getoptions(){
     return this.httpClient.get<any>(this.baseUrl + '/getoptions.php');
   }

   public getstudentsquest(){
     return this.httpClient.get<any>(this.baseUrl + '/getstudentquest.php');
   }
  // getHero(id: number): Observable<Quizmodel> {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.httpClient.get<Quizmodel>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Quizmodel>(`getHero id=${id}`))
  //   );
  // }
  // log(arg0: string): void {
  //   throw new Error("Method not implemented.");
  // }
  // handleError<T>(arg0: string): any {
  //   throw new Error("Method not implemented.");
  // }

  public getstudentsquestbycourseid(id){
    // return this.httpClient.get<any>(this.baseUrl + '/getstudentquest.php?id=' + id);
    return this.httpClient.get<any>(this.baseUrl + '/getstudentquest.php?id=' + id);

  }

    public userregistration(name,email,pwd) {
    return this.httpClient.post<any>(this.baseUrl + '/signupstudents.php', { name, email, pwd })
    // tslint:disable-next-line: no-shadowed-variable
    .pipe(map(Users => {
    return Users;
    }));
    }
    
    public setquest(quest){
      return this.httpClient.post(this.baseUrl + '/setquest.php', quest);
    }

    // public setquest(question, optionA, optionB, optionC, optionD, correctans, marks){
    // tslint:disable-next-line: max-line-length
    //   return this.httpClient.post<any>(this.baseUrl + '/setquest.php', { question, optionA, optionB, optionC, optionD, correctans, marks })
    //   // tslint:disable-next-line: no-shadowed-variable
    //   .pipe(map( Setquest => {
    //   return Setquest;
    //   }));
    // }

    public getquest(){
      return this.httpClient.get<any>(this.baseUrl + '/getquest.php');
    }
    
    // public inputcourses(course) {
    //   return this.httpClient.post<any>(this.baseUrl + '/entercourses.php', { course })
    //   // tslint:disable-next-line: no-shadowed-variable
    //   .pipe(map( Courses => {
    //     return Courses;
    //   }));
    //   }

   inputcourses(tyy) {
      return this.httpClient.post(this.baseUrl + '/entercourses.php', tyy);
    }


      public getcourse() {
        return this.httpClient.get<any>(this.baseUrl + '/getcourses.php');
      }

    public adminlogin(identification, password) {
      return this.httpClient.post<any>(this.baseUrl + '/adminlogin.php', {identification , password })
      // tslint:disable-next-line: no-shadowed-variable
      .pipe(map( Admin => {
      this.setToken( Admin [0].name);
      this.getLoggedInName.emit(true);
      return Users;
      }));
      }

    public adminreg(name, email, identification, pwd){
      return this.httpClient.post<any>(this.baseUrl + '/adminreg.php', { name, email, identification, pwd })
      // tslint:disable-next-line: no-shadowed-variable
      .pipe(map( Admin => {
      return Admin;
      }));

    }

    public getcoursebyid(id) {
      return this.httpClient.get<any>(this.baseUrl + '/getcourses.php?id='+ id);
    }

  setToken(token: string) {
  localStorage.setItem('token', token);
  }
  getToken() {
  return localStorage.getItem('token');
  }
  deleteToken() {
  localStorage.removeItem('token');
  }
  isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
  return true;
  }
  return false;
  }
}
