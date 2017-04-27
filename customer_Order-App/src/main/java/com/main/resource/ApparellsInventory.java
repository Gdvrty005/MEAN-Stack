package com.main.resource;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="apparells_inventory")
public class ApparellsInventory {
	
	@Id
	private String id;
	private String name;
	private String price;
	private String brand;
	private String img_url;
	
	private String inventoryType;

	public ApparellsInventory() {
		
	}

	public ApparellsInventory(String id, String name, String price, String brand, String inventoryType, String img_url) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.brand = brand;
		this.inventoryType = inventoryType;
		this.img_url = img_url;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getInventoryType() {
		return inventoryType;
	}

	public void setInventoryType(String inventoryType) {
		this.inventoryType = inventoryType;
	}

	public String getImg_url() {
		return img_url;
	}

	public void setImg_url(String img_url) {
		this.img_url = img_url;
	}
	

}
