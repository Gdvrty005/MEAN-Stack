import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {AppComponent} from './app.component';
import { AppRoutingModule } from './app.routing';
import {TasksComponent} from './components/tasks/tasks.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/register/register.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { BooksComponent } from './components/books/books.component';
import { ApparellsComponent } from './components/apparells/apparells.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { StationaryComponent } from './components/stationary/stationary.component';

@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule, AppRoutingModule ],
  declarations: [
  AppComponent , 
  TasksComponent, 
  LoginComponent, 
  HomeComponent, 
  RegisterComponent, 
  WelcomeComponent, 
  OrdersComponent,
  ClothingComponent,
  EntertainmentComponent,
  ApparellsComponent,
  BooksComponent,
  StationaryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }