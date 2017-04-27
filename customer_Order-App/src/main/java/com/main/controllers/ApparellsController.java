package com.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.resource.ApparellsInventory;
import com.main.service.ApparellsInventoryService;

@RestController
@RequestMapping("/apparells")
public class ApparellsController {
	
	@Autowired
	ApparellsInventoryService apparellsInventoryService;
	
	@RequestMapping("/all")
	public List<ApparellsInventory> getAllBooks(){
		return apparellsInventoryService.getAllApparells();
	}

}
