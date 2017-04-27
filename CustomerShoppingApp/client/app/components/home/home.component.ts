import { Component } from '@angular/core';
import { LoginService } from '../../services/login_services/login.service';
import { OrderService } from '../../services/orders_service/orders.service';
import { InventoryService } from '../../services/inventory_services/inventory.service';
import { Users } from '../../../Users';
import { Orders } from '../../../Orders';


@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html'
})

export class HomeComponent {
    currentUser: Users;
    apparells: any;
    stationary: any;
    inventoryList : any;
    books: any;
    entertainment: any;
    clothing: any;
    id: Users;
    orders: Orders[];
    users: Users[];
    name: string;
    constructor(private loginService:LoginService,
    private orderService:OrderService,
    private inventoryService: InventoryService
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currUser'));
        this.orderService.getOrders(this.currentUser.id)
            .subscribe(orders => {
                this.orders = orders;
            });
        this.inventoryService.getAllInventoryList()
            .subscribe(inventoryList =>{
                this.inventoryList = inventoryList;
            });
        

        this.inventoryService.getAllApparells()
            .subscribe(apparells => {
                this.apparells = apparells;
            });

            this.inventoryService.getAllBooks()
            .subscribe(books => {
                this.books = books;
            }); 

            this.inventoryService.getAllStationary()
            .subscribe(stationary => {
                this.stationary = stationary;
            }); 

            this.inventoryService.getAllEntertainment()
            .subscribe(entertainment => {
                this.entertainment = entertainment;
            }); 

            this.inventoryService.getAllClothing()
            .subscribe(clothing => {
                this.clothing = clothing;
            }); 




    }

    getProfile(name){
        this.loginService.getUser(name).subscribe(users => {
          this.users = users;
      });
    }


   
}


