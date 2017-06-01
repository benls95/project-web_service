package jdbc;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;

/**
 * This is a servlet class for the method 'getBook' and allows the user to pass through data and 
 * send to the correct .jsp for formatting (xml, json or text)
 * It invokes the getBook method (using dao.getBook(some_title)) and 
 * places the results into a BookList array
 * This array is then transported to the .jsp for data formatting
 * This servlet class changes the output page to the .jsp
 * and it's url-pattern is: /getBook (web.xml)
 * 
 * @author Ben Longbottom-Smith
 * 
 */

public class getBook extends HttpServlet {

	public void doGet(HttpServletRequest request,
					  HttpServletResponse response)
        throws ServletException, IOException {
		response.setHeader("Cache-Control", "no-cache");
	    response.setHeader("Pragma", "no-cache");
		
		BookDAO dao = new BookDAO();
		ArrayList<Book> booksList = new ArrayList<Book>();
		
		//name="title" from a submitted form on index.html 
		// are retrieved
		String searchBookname = request.getParameter("title");
		
		//booksList only contains books with that title
		booksList = dao.getBook(searchBookname);
		
		request.setAttribute("books",  booksList); // request object
		String format = request.getParameter("format");
		String outputPage;
	    if ("xml".equals(format)) {
	      response.setContentType("text/xml");  // convert to XML
	      outputPage = "/WEB-INF/results/books-xml.jsp";
	    //outputPage = "localhost:8000/jdbcdemo/getBook?title=some_title&format=xml";
	    } else if ("json".equals(format)) {
	      response.setContentType("application/json");   // convert to JSON
	      outputPage = "/WEB-INF/results/books-json.jsp";
	    //outputPage = "localhost:8000/jdbcdemo/getBook?title=some_title&format=json";
	    } else { // default FORMAT
	      response.setContentType("text/plain");    // convert to TEXT
	      outputPage = "/WEB-INF/results/books-string.jsp";
	    //outputPage = "localhost:8000/jdbcdemo/getBook?title=some_title&format=text";
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