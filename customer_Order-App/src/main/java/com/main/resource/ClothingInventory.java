package com.main.resource;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="clothing_inventory")
public class ClothingInventory {
	
	@Id
	private String id;
	private String brand;
	private String type;
	private String price;
	private String img_url;
	
	private String inventoryType;

	public ClothingInventory() {
		
	}

	public ClothingInventory(String id, String brand, String type, String price, String inventoryType, String img_url) {
		super();
		this.id = id;
		this.brand = brand;
		this.type = type;
		this.price = price;
		this.inventoryType = inventoryType;
		this.img_url = img_url;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
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
