import { Component } from '@angular/core';
import { InventoryService } from '../../services/inventory_services/inventory.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-entertainment',
  templateUrl: 'entertainment.component.html' 
})

export class EntertainmentComponent { 
    entertainment: any;
  data = {};
  constructor(
    private router: Router,
    private inventoryService: InventoryService   ){
        this.inventoryService.getAllEntertainment()
            .subscribe(entertainment => {
                this.entertainment = entertainment;
            });
     }

}