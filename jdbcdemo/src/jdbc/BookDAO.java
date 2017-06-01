package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import jdbc.Book;

public class BookDAO {
	
	static Connection c = null;
	static Statement s = null;
	ResultSet rs = null;
	
	public String bookId;
	public String title;
	public String type;
	public String year;
	public String author;
	public String price;
	public String avail;
	
	// The default login details for the mudfoot server, however can be changed to suit another user
	public static final String userid = "longbotb";
	public static final String userpass = "Khrithwo8";
	
	// opens the connection to MySQL database through mudfoot - e.g. used at the beginning of a method
	public static Statement getConnection() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			BookDAO.c = DriverManager.getConnection(
					"jdbc:mysql://mudfoot.doc.stu.mmu.ac.uk:3306/" + userid + "?user=" + userid + "&password=" + userpass);
			s = BookDAO.c.createStatement();
		} catch (SQLException arg0) {
			arg0.printStackTrace();
		} catch (ClassNotFoundException arg1) {
			arg1.printStackTrace();
		}

		return s;
	}

	// closes the connection to MySQL database (books.sql) - e.g. used after a method is invoked
	public static void closeConnection() {
		try {
			if (s != null) {
				s.close();
			}

			if (c != null) {
				c.close();
			}
		} catch (SQLException arg0) {
			arg0.printStackTrace();
		}

	}

	// retrieves all books from MySQL database table (books.sql)
	// returns as an array
	public ArrayList<Book> getAllBooks() {
		ArrayList<Book> BooksArray = new ArrayList<Book>();

		try {
			String i = "SELECT * FROM  books";
			ResultSet rs = getConnection().executeQuery(i);
			System.out.println(i);
			if (rs != null) {
				Book book;
				//for loop is used to find each 'item' in the ResultSet (query) and 
				// adding to a new ArrayList, whilst setting the Book attributes to each Book.
				for (; rs.next(); BooksArray.add(book)) {
					book = new Book(this.title, this.type, this.year, this.author, this.price, this.avail);

					try {
						book.setBookId(rs.getString("ID"));
						book.setTitle(rs.getString("Title"));
						book.setType(rs.getString("Type"));
						book.setYear(rs.getString("Year"));
						book.setAuthor(rs.getString("Author"));
						book.setPrice(rs.getString("Price"));
						book.setAvail(rs.getString("Availability"));
					} catch (SQLException e) {
						e.printStackTrace();
					}
				}

				rs.close();
			}
		} catch (SQLException e) {
			// catches all SQL exceptions with the query
			System.out.println("Book has not been added to search array");
			e.printStackTrace();
		}

		for (int arg7 = 0; arg7 < BooksArray.size(); ++arg7) {
			// prints the new array with the results from the query (all books)
			System.out.println(BooksArray.get(arg7));
		}

		closeConnection();
		return BooksArray;
	}

	// retrieves all books with a specific title (input parameter) from MySQL database table (books.sql)
	// returns as an array
	public ArrayList<Book> getBook(String titl) {
		ArrayList<Book> BooksArray = new ArrayList<Book>();

		try {
			String i = "SELECT * FROM  books WHERE title  = \'" + titl + "\'";
			ResultSet rs = getConnection().executeQuery(i);
			System.out.println(i);
			if (rs != null) {
				Book book;
				//for loop is used to find each 'item' in the ResultSet (query) and 
				// adding to a new ArrayList, whilst setting the Book attributes to each Book.
				for (; rs.next(); BooksArray.add(book)) {
					book = new Book(this.title, this.type, this.year, this.author, this.price, this.avail);

					try {
						book.setBookId(rs.getString("ID"));
						book.setTitle(rs.getString("Title"));
						book.setType(rs.getString("Type"));
						book.setYear(rs.getString("Year"));
						book.setAuthor(rs.getString("Author"));
						book.setPrice(rs.getString("Price"));
						book.setAvail(rs.getString("Availability"));
					} catch (SQLException arg6) {
						arg6.printStackTrace();
					}
				}

				rs.close();
			}
		} catch (SQLException e) {
			// catches all SQL exceptions with the query
			System.out.println("Book has not been added to search array");
			e.printStackTrace();
		}

		for (int arg8 = 0; arg8 < BooksArray.size(); ++arg8) {
			// prints the new array with the results from the query (all books with specific title)
			System.out.println(BooksArray.get(arg8));
		}

		closeConnection();
		return BooksArray;
	}

	// inserts a new book into MySQL database table (books.sql)
	// returns a number of books inserted (1, 0)
	public int insertBook(Book c) {
		// how many books get inserted
		int numInserted = 0;

		String s = "insert into books (ID,title,type,year,author,price,availability) VALUES (null, + \'" + c.getTitle() + "\' , \'" + c.getType() + "\' , \'"
				+ c.getYear() + "\' ,  \'" + c.getAuthor() + "\' , \'" + c.getPrice() + "\' , \'" + c.getAvail()
				+ "\' ) \n";
		// invoke update, result is how many were inserted
		System.out.println(s);  
		  try {
	            numInserted = getConnection().executeUpdate(s);
	        	System.out.println("Book " + c.getTitle() + " has been added into db");
	        	closeConnection();
	        	
	        } catch (SQLException e) {
	            // catches all SQL exceptions with the query
	        	System.out.println("Book not Added unfortuntely");
	            e.printStackTrace();
	        }
		  		System.out.println("Books added: " + numInserted);
	           return numInserted;
	       } 

	// deletes a book with a specific ID (input parameter) from MySQL database table (books.sql)
	// returns a number of books deleted (1, 0)
	public int deleteBook(String bookId) { 
		int numDeleted = 0;
		String   query = "delete from books where ID = '" + bookId + "' \n"; 
		System.out.println(query);
		try {
		    numDeleted = getConnection().executeUpdate(query);
	    	System.out.println("Book with ID: " + bookId + " has been deleted from db");
	    	closeConnection();
	    	
	    } catch (SQLException e) {
	    	 // catches all SQL exceptions with the query
	    	System.out.println("Book not Deleted");
            e.printStackTrace();
	    }
	  		System.out.println("Books deleted: " + numDeleted);
	       return numDeleted;
	     
	   }  
}