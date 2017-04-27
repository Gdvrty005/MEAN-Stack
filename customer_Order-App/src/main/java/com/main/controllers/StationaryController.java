package com.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.resource.StationaryInventory;
import com.main.service.StationaryInventoryService;

@RestController
@RequestMapping("/stationary")
public class StationaryController {
	
	@Autowired
	StationaryInventoryService stationaryInventoryService;
	
	@RequestMapping("/all")
	public List<StationaryInventory> getAllBooks(){
		return stationaryInventoryService.getAllStationary();
	}

}
