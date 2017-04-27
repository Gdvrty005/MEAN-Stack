package com.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.repositories.ApparellsRepository;
import com.main.resource.ApparellsInventory;

@Service
public class ApparellsInventoryService {
	
	@Autowired
	ApparellsRepository apparellsRepository;
	
	public List<ApparellsInventory> getAllApparells(){
		return apparellsRepository.findAll();
	}

}
