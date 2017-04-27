import { Component } from '@angular/core';
import {TaskService} from './services/task.service';
import {LoginService} from './services/login_services/login.service';
import {HomeService} from './services/home_services/home.service';
import { AuthenticationService } from './services/authenticationService/authentication.service';
import {OrderService} from './services/orders_service/orders.service';
import {InventoryService} from './services/inventory_services/inventory.service';
import { Router } from '@angular/router'; 
import { Routes, RouterModule} from '@angular/router';
import { Users } from '../../client/Users';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [TaskService, LoginService, HomeService, OrderService, AuthenticationService,InventoryService] 
})

export class AppComponent { 
  currentUser: Users;
  id: Users;
  constructor( private router: Router,
  private authenticationService: AuthenticationService){
  }

   logout($event): void{
    $event.preventDefault();

    this.authenticationService.logout();
    this.router.navigate(['']);
   }
}