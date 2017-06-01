package jdbc;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;
import jdbc.Book;
import jdbc.BookDAO;

/**
 * This class is the Controller for console logging (without running on server)
 * I am able to test methods in here before loading my web service onto a browser 
 * The DELETE method (deleteBook) can only be invoked in this class as I decided not create a servlet class for it
 * BookDAO provides all the methods for my basic web service (using http calls)
 * - including the CRUD operations (Retrieve all Books, Retrieve Books by Title, Insert a Book, Delete a Book by ID)
 * 
 * @author Ben Longbottom-Smith
 * 
 */

public class Controller {
	public static String bookId;
	public static String title;
	public static String type;
	public static String year;
	public static String author;
	public static String price;
	public static String avail;

	public static void main(String[] args) throws SQLException {
		
		BookDAO dao = new BookDAO();
		ArrayList booksList = new ArrayList();
		
		if (booksList != null) {
			booksList = dao.getAllBooks();  // displays all books
		}

		System.out.println("\n<------------------>\n");
		
		/* Can be used as a test for delete method
		 * Can use books.sql as file to load my table of books
		 * 
		dao.deleteBook("2");  // Should delete 'Moby Dick'
		*/
		System.out.println("\n<------------------>\n");
		
		dao.getAllBooks();  // displays all books after deleted ID: 2
		
		
	}
}
		
		
		
		
		//System.out.println("\n<-----^^^^^^^^------------->\n");
		//dao.getAllBooks();
		//System.out.println("\n<------------------()()()>\n");
		//dao.getBook("It");
		//dao.getBook("It");
				//dao.insertBook(test); 
//Book test = new Book("neweTest", "Novel", "2006", "Test Author", "12.56","Good") ;

