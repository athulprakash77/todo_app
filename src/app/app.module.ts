import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoallComponent } from './todoall/todoall.component';
import { Router, RouterModule, Routes } from '@angular/router';
import {     HttpClientModule } from '@angular/common/http';


const myroutes:Routes=[

  {path:"",component:TodoComponent},
  {path:"todoall",component: TodoallComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NavbarComponent,
    TodoallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
