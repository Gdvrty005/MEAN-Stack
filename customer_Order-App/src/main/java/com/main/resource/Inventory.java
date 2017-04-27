package com.main.resource;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="inventory")
public class Inventory {
	
	@Id
	private String id;
	private String category;
	
	
	public Inventory() {
		
	}


	public Inventory(String id, String category) {
		super();
		this.id = id;
		this.category = category;
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}
	
	
	
	

}
