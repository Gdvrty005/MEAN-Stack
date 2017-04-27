package com.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.repositories.ClothingRepository;
import com.main.resource.ApparellsInventory;
import com.main.resource.ClothingInventory;

@Service
public class ClothingInventoryService {
	
	@Autowired
	ClothingRepository clothingRepository;
	
	public List<ClothingInventory> getAllClothing(){
		return clothingRepository.findAll();
	}

}
