import { Component } from '@angular/core';
import { InventoryService } from '../../services/inventory_services/inventory.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-stationary',
  templateUrl: 'stationary.component.html' 
})

export class StationaryComponent { 
    stationary: any;
  data = {};
  constructor(
    private router: Router,
    private inventoryService: InventoryService   ){
        this.inventoryService.getAllStationary()
            .subscribe(stationary => {
                this.stationary = stationary;
            });
     }

}