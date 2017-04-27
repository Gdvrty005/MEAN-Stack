package com.main.resource;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="books_inventory")
public class BooksInventory {
	
	@Id
	private String id;
	private String title;
	private String author;
	private String price;
	private String pages;
	private String publisher;
	private String img_url;
	
	private String inventoryType;
	
	

	public BooksInventory() {
		
	}

	public BooksInventory(String id, String title, String author, String price, String pages, String publisher,
			String inventoryType, String img_url) {
		super();
		this.id = id;
		this.title = title;
		this.author = author;
		this.price = price;
		this.pages = pages;
		this.publisher = publisher;
		this.inventoryType = inventoryType;
		this.img_url = img_url;
	}



	public String getId() {
		return id;
	}



	public void setId(String id) {
		this.id = id;
	}



	public String getTitle() {
		return title;
	}



	public void setTitle(String title) {
		this.title = title;
	}



	public String getAuthor() {
		return author;
	}



	public void setAuthor(String author) {
		this.author = author;
	}



	public String getPrice() {
		return price;
	}



	public void setPrice(String price) {
		this.price = price;
	}



	public String getPages() {
		return pages;
	}



	public void setPages(String pages) {
		this.pages = pages;
	}



	public String getPublisher() {
		return publisher;
	}



	public void setPublisher(String publisher) {
		this.publisher = publisher;
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
