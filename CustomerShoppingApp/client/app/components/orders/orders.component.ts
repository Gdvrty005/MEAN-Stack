import { Component, OnInit } from '@angular/core';
import { Router, Params, Data, ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/orders_service/orders.service';
import { LoginService } from '../../services/login_services/login.service';
import { Users } from '../../../Users';
import { Orders } from '../../../Orders';

@Component({
  moduleId: module.id,
  selector: 'app-orderDetails',
  templateUrl: 'orders.component.html' 
})
export class OrdersComponent implements OnInit{
    currentUser: Users;
    users: Users[];
    public orderId;
    orders: Orders[];
    constructor(  private route: ActivatedRoute,
    private orderService:OrderService,
    private loginService:LoginService  ) {
      this.currentUser = JSON.parse(localStorage.getItem('currUser'));
      this.loginService.getUser(this.currentUser.loginId)
          .subscribe(users => {
              this.users = users;
          });
        
    }
    ngOnInit(){
      let id = this.route.snapshot.params['id'];
      this.orderId = id;
      this.orderService.getOrderDetails(this.orderId)
            .subscribe(orders => {
              console.log('Orders:',orders);
                this.orders = orders;
            });
      
    }

}