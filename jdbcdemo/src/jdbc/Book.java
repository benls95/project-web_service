package jdbc;

import javax.xml.bind.annotation.*;
import java.util.*;


/**
 * This class provides the object (a 'Book'), which will be used for the web service
 * Each book is made public so it can be called by methods in other classes 
 * 
 * @author Ben Longbottom-Smith
 * 
 */

@XmlRootElement (name="book")
@XmlAccessorType (XmlAccessType.FIELD)

public class Book {
	
	public Book() {
		
	}
	
	private String bookId;
	private String title;
	private String type;
	private String year;
	private String author;
	private String price;
	private String avail;

	public Book(String title, String type, String year, String author, String price, String avail) {
		this.title = title;
		this.type = type;
		this.year = year;
		this.author = author;
		this.price = price;
		this.avail = avail;
	}
 
	public String getBookId() {
		return this.bookId;
	}

	public void setBookId(String bookId) {
		this.bookId = bookId;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getYear() {
		return this.year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getAuthor() {
		return this.author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getPrice() {
		return this.price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getAvail() {
		return this.avail;
	}

	public void setAvail(String avail) {
		this.avail = avail;
	}
	
	@Override
	// String to print to console - test the book values
	public String toString() {
		return "Book ID: " + this.bookId + ", " + "Title: " + this.title + ", " + "Type: " + this.type + ", " + "Year: "
				+ this.year + ", " + "Author: " + this.author + ", " + "Price: " + this.price + ", " + "Availability: "
				+ this.avail;
	}

}