import { Component } from '@angular/core';
import { InventoryService } from '../../services/inventory_services/inventory.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-clothing',
  templateUrl: 'clothing.component.html' 
})

export class ClothingComponent { 
    clothing: any;
  data = {};
  constructor(
    private router: Router,
    private inventoryService: InventoryService   ){
        this.inventoryService.getAllClothing()
            .subscribe(clothing => {
                this.clothing = clothing;
            });
     }

}