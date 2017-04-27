package com.main.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.main.resource.ClothingInventory;

public interface ClothingRepository extends MongoRepository<ClothingInventory, String> {

}
