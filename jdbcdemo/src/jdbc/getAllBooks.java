package jdbc;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;

/**
 * This is a servlet class for the method 'getAllBooks' and allows the user to pass through data and 
 * send to the correct .jsp for formatting (xml, json or text)
 * It invokes the getAllBooks method (using dao.getAllBooks()) and 
 * places the results into a BookList array
 * This array is then transported to the .jsp for data formatting
 * This servlet class changes the output page to the .jsp
 * and it's url-pattern is: /getAllBooks (web.xml)
 * 
 * @author Ben Longbottom-Smith
 * 
 */

public class getAllBooks extends HttpServlet {

	public void doGet(HttpServletRequest request,
					  HttpServletResponse response)
        throws ServletException, IOException {
	    response.setHeader("Cache-Control", "no-cache");
	    response.setHeader("Pragma", "no-cache");
		
		BookDAO dao = new BookDAO();
		ArrayList<Book> booksList = new ArrayList<Book>();
		
		//booksList contains all books
		booksList = dao.getAllBooks();
		
		request.setAttribute("books",  booksList); // request object
		String format = request.getParameter("format");
		String outputPage;
	    if ("xml".equals(format)) {
	      response.setContentType("text/xml");  // convert to XML
	      outputPage = "/WEB-INF/results/books-xml.jsp";
	    //outputPage = "localhost:8000/jdbcdemo/getAllBooks?format=xml";
	    } else if ("json".equals(format)) {
	      response.setContentType("application/json");   // convert to JSON
	      outputPage = "/WEB-INF/results/books-json.jsp";
	    //outputPage = "localhost:8000/jdbcdemo/getAllBooks?format=json";
	    } else { // default FORMAT-text
	      response.setContentType("text/plain");    // convert to TEXT
	      outputPage = "/WEB-INF/results/books-string.jsp";
	      //outputPage = "localhost:8000/jdbcdemo/getAllBooks?format=text";
	      // format can equal anything, but 'json' or 'xml'
	    }
		
		RequestDispatcher dispatcher =
		request.getRequestDispatcher(outputPage);
		dispatcher.include(request, response);
	}
	
	// I am using POST as a response method and so doPost is called
	  public void doPost(HttpServletRequest request,
              HttpServletResponse response)
          throws ServletException, IOException {
		  doGet(request, response);
	  }
}