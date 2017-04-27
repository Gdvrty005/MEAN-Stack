package com.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.repositories.BooksRepository;
import com.main.resource.BooksInventory;

@Service
public class BooksInventoryService {

	@Autowired
	BooksRepository booksRepository;
	
	
	public List<BooksInventory> getAllBooks(){
		return booksRepository.findAll();
	}
}
