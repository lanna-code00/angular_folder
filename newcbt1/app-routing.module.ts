import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { StuAnswersComponent } from './stu-answers/stu-answers.component';
import { OptionsComponent } from './options/options.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { StudentportalComponent } from './studentportal/studentportal.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { EntercoursesComponent } from './entercourses/entercourses.component';
import { SetquestComponent } from './setquest/setquest.component';




const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'adminsidebar', component: AdminsidebarComponent, children:[
    {path: '', redirectTo: 'adminDash', pathMatch: 'full'},
    {path: 'adminDash', component: AdminDashComponent},
    {path: 'entercourses', component: EntercoursesComponent, children:[
      {path: 'dialogbox', component: DialogboxComponent}
    ]},
    {path: 'setquest', component: SetquestComponent},
    {path: 'options', component: OptionsComponent},
  ]},
  {path: 'register', component: RegisterComponent},
   {path: 'sidebar', component: SidebarComponent, children:[
     {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
     {path: 'dashboard', component: DashboardComponent},
     {path: 'studentportal', component: StudentportalComponent}, 
      {path: 'stuAnswers/:id', component: StuAnswersComponent}
   ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
