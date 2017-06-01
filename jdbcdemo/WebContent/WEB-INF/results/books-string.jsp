<%@ page import="java.util.*" 
trimDirectiveWhitespaces="true"%>
<%@ page import="jdbc.*" 
trimDirectiveWhitespaces="true"%>
<%
ArrayList<Book> books = (ArrayList<Book>) request.getAttribute("books");
Book oneBook = null;
for (int i=0; i<books.size();i++){
	oneBook = books.get(i);
	out.println("#" + oneBook.getBookId() + "#" + oneBook.getTitle() + "#" + oneBook.getType() 
	+ "#" +oneBook.getYear() + "#" +oneBook.getAuthor() + "#" +oneBook.getPrice() + "#" +oneBook.getAvail());	
}
%>