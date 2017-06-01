package jdbc;
import javax.xml.bind.annotation.*;
import java.util.*;

/**
 * This class is called a container class to hold a list of Books to be sent to one of 
 * 3 .jsp files for parsing (xml, json and text)
 * It is used in my 3 servlet classes (getBook.java, getAllBooks.java and insertBook.java)
 * 
 * @author Ben Longbottom-Smith
 * 
 */

@XmlRootElement (name = "booklist")
@XmlAccessorType (XmlAccessType.FIELD)

public class BookList {
	
	public BookList() {
		
	}
	
	@XmlElement(name="book")
	public List<Book> books;
	public BookList(List<Book> inBooks) {
		books=inBooks;
	}
	public List<Book> getBookList() {
		return books;
	}
	public void setBookList(List<Book> inBooks) {
		books = inBooks;
	}
}