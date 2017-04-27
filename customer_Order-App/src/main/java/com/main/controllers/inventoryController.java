package com.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.resource.Inventory;
import com.main.service.InventoryService;

@RestController
@RequestMapping("/inventory")
public class inventoryController {
	
	@Autowired
	InventoryService inventoryService;
	
	@RequestMapping("/all")
	public List<Inventory> getAllInventory(){
		return inventoryService.getAllInventory();
	}
	
	

}
