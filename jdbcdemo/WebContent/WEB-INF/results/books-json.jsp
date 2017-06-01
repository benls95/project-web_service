<%@ page import="jdbc.*" 
trimDirectiveWhitespaces="true"%>
<%@ page import="java.util.*" 
trimDirectiveWhitespaces="true"%>
<%@ page import="java.io.*" 
trimDirectiveWhitespaces="true"%>
<%@ page import="javax.*" 
trimDirectiveWhitespaces="true"%>
<%@ page import="com.google.gson.Gson" 
trimDirectiveWhitespaces="true"%>
<%
ArrayList<Book> books = (ArrayList<Book>) request.getAttribute("books");
Gson gson = new Gson();
String jsonInString = gson.toJson(books);
response.getWriter().println(jsonInString);
%>