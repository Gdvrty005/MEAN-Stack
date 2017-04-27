package com.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.repositories.CustomersRepository;
import com.main.resource.customerdetails;

@Service
public class CustomersService {
	
	@Autowired
	CustomersRepository customersRepository;
	
	public List<customerdetails> getAllCustomers(){
		return customersRepository.findAll();
	}
	
	
	public customerdetails getCustomer(String loginId){
		return customersRepository.findByLoginId(loginId);
	}
	
	public customerdetails getByLoginId(String id){
		return customersRepository.findByLoginId(id);
	}
	
	public customerdetails getByPassword(String password){
		return customersRepository.findByPassword(password);
	}

}
