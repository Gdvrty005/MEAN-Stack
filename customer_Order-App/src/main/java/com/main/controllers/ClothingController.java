package com.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.resource.ClothingInventory;
import com.main.service.ClothingInventoryService;

@RestController
@RequestMapping("/clothing")
public class ClothingController {
	
	@Autowired
	ClothingInventoryService clothingInventoryService;
	
	@RequestMapping("/all")
	public List<ClothingInventory> getAllBooks(){
		return clothingInventoryService.getAllClothing();
	}
	

}
