import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewhomeComponent } from './newhome/newhome.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', redirectTo: 'newhome', pathMatch: 'full'},
  {path: 'home', component: NewhomeComponent},
  // {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
