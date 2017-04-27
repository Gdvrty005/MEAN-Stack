package com.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.repositories.InventoryRepository;
import com.main.resource.Inventory;

@Service
public class InventoryService {
	
	@Autowired
	InventoryRepository inventoryRepository;
	
	public List<Inventory> getAllInventory(){
		return inventoryRepository.findAll();
	}

}
