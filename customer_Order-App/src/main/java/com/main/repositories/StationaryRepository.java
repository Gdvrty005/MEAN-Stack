package com.main.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.main.resource.StationaryInventory;

public interface StationaryRepository extends MongoRepository<StationaryInventory, String> {

}
