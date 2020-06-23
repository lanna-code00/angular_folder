import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewangularComponent } from './newangular/newangular.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RhodaComponent } from './rhoda/rhoda.component';


const routes: Routes = [
{path:"", redirectTo:"/rhoda", pathMatch:"full"},
{path:"",component:RhodaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
