import { Component } from '@angular/core';
import { InventoryService } from '../../services/inventory_services/inventory.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-books',
  templateUrl: 'books.component.html' 
})

export class BooksComponent { 
    books: any;
  data = {};
  constructor(
    private router: Router,
    private inventoryService: InventoryService   ){
        this.inventoryService.getAllBooks()
            .subscribe(books => {
                this.books = books;
            });
     }

}