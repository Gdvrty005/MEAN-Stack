package com.main.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.main.resource.Inventory;

public interface InventoryRepository extends MongoRepository<Inventory, String> {

}
