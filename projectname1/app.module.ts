import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewangularComponent } from './newangular/newangular.component';
import { HomeComponent } from './home/home.component';
import { RhodaComponent } from './rhoda/rhoda.component';

@NgModule({
  declarations: [
    AppComponent,
    NewangularComponent,
    HomeComponent,
    RhodaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
