<%@ page import="java.io.*" 
trimDirectiveWhitespaces="true"%>
<%@ page import="jdbc.*" 
trimDirectiveWhitespaces="true"%>
<%@ page import="javax.*" 
trimDirectiveWhitespaces="true"%>
<%@ page import="java.util.*" 
trimDirectiveWhitespaces="true"%>
<%@ page import="javax.xml.bind.JAXBContext" 
trimDirectiveWhitespaces="true"%>
<%@ page import="javax.xml.bind.JAXBException" 
trimDirectiveWhitespaces="true"%>
<%@ page import="javax.xml.bind.Marshaller" 
trimDirectiveWhitespaces="true"%>
<% 
BookList books = new BookList((List<Book>) request.getAttribute("books"));
try {
	JAXBContext jaxbContext = JAXBContext.newInstance(BookList.class); 
	Marshaller jaxbMarshaller = jaxbContext.createMarshaller();
	jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
	jaxbMarshaller.marshal(books, out); // out is the stream back to browser
} catch (JAXBException e) {
	e.printStackTrace();
	System.out.println(e);
}
catch (UnsupportedOperationException e) {
		e.printStackTrace();
		System.out.println(e);
	}
catch (Exception e) {
	e.printStackTrace();
	System.out.println(e);
}
%>