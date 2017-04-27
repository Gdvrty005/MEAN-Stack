package com.main.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.main.resource.ApparellsInventory;

public interface ApparellsRepository extends MongoRepository<ApparellsInventory, String> {

}
