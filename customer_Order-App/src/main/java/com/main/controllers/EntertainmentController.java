package com.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.resource.EntertainmentInventory;
import com.main.service.EntertainmentInventoryService;

@RestController
@RequestMapping("/entertainment")
public class EntertainmentController {
	
	@Autowired
	EntertainmentInventoryService entertainmentInventoryService;
	
	@RequestMapping("/all")
	public List<EntertainmentInventory> getAllBooks(){
		return entertainmentInventoryService.getAllEntertainment();
	}

}
