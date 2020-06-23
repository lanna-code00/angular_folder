import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TestingComponent } from './testing/testing.component';



const routes: Routes = [
  {path:"", redirectTo:'portal/home', pathMatch:'full'},
  {path:'portal', children:[
    {path:'home', component: HomeComponent},
    {path:'add-student', component: AddStudentComponent},
    {path: 'students', component: StudentsComponent},
    {path: 'testing', component: TestingComponent},
    {path:'profile/:id', component: ProfileComponent},
    
  ]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
