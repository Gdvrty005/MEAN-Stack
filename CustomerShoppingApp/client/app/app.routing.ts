import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {RegisterComponent} from './components/register/register.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { BooksComponent } from './components/books/books.component';
import { ApparellsComponent } from './components/apparells/apparells.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { StationaryComponent } from './components/stationary/stationary.component';


const routes: Routes = [
    { path: 'home' , component: HomeComponent},
    { path: '' , component: WelcomeComponent},
    { path: 'login' , component: LoginComponent},
    { path: 'register' , component: RegisterComponent},
    { path: 'orderDetails/:id', component: OrdersComponent},
    { path: 'home/clothing', component: ClothingComponent},
    { path: 'home/stationary', component: StationaryComponent},
    { path: 'home/entertainment', component: EntertainmentComponent},
    { path: 'home/apparells', component: ApparellsComponent},
    { path: 'home/books', component: BooksComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})

export class AppRoutingModule {}