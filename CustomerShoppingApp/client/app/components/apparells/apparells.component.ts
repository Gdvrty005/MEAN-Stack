import { Component } from '@angular/core';
import { InventoryService } from '../../services/inventory_services/inventory.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-apparells',
  templateUrl: 'apparells.component.html' 
})

export class ApparellsComponent { 
    apparells: any;
    name: string;
    brand: string;
    price: string;
    img_url: string;
    totalQty: Number;
    apparell: {};
  data = {};
  constructor(
    private router: Router,
    private inventoryService: InventoryService   ){
        this.inventoryService.getAllApparells()
            .subscribe(apparells => {
                this.apparells = apparells;
            });
     }

     addToCart(apparell){
         var cartItem = {
             name: apparell.name,
             brand: apparell.brand,
             price: apparell.price,
             img_url: apparell.img_url
         }

         console.log(apparell.price);
         this.totalQty = this.totalQty;



     }
}