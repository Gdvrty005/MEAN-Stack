package com.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.resource.BooksInventory;
import com.main.service.BooksInventoryService;

@RestController
@RequestMapping("/books")
public class BooksController {
	
	@Autowired
	BooksInventoryService booksInventoryService;
	
	@RequestMapping("/all")
	public List<BooksInventory> getAllBooks(){
		return booksInventoryService.getAllBooks();
	}

}
