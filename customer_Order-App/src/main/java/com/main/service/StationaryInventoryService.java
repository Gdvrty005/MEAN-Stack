package com.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.repositories.StationaryRepository;
import com.main.resource.StationaryInventory;

@Service
public class StationaryInventoryService {

	@Autowired
	StationaryRepository stationaryRepository;
	
	public List<StationaryInventory> getAllStationary(){
		return stationaryRepository.findAll();
	}
}
