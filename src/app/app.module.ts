import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes  } from "./app.routes";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JokesComponent } from './jokes/jokes.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes ,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
