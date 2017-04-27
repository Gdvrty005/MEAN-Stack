package com.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.repositories.EntertainmentRepository;
import com.main.resource.EntertainmentInventory;

@Service
public class EntertainmentInventoryService {

	@Autowired
	EntertainmentRepository entertainmentRepository;
	
	public List<EntertainmentInventory> getAllEntertainment(){
		return entertainmentRepository.findAll();
	}
}
