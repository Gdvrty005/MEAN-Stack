package com.main.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.main.resource.EntertainmentInventory;

public interface EntertainmentRepository extends MongoRepository<EntertainmentInventory, String> {

}
