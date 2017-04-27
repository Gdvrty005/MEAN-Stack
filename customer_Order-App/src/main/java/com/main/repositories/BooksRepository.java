package com.main.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.main.resource.BooksInventory;

public interface BooksRepository extends MongoRepository<BooksInventory, String> {

}
