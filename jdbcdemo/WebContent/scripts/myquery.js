$(function() {
     
     $("#test_one_input").one().click(test_one);     // button for getBook(title) form
     $("#test_all_input").one().click(test_all);	// button for getAllBooks() form
     $("#test_ins_input").one().click(test_ins);	// button for insertBook(Book b) form
     
     $("#accordion-panel-div").accordion({active: 0, heightStyle: 'content', collapsible: true});  // jquery UI
     //
     $("#testbkformat").autocomplete({               // jquery UI
    	  source: [ "text", "json", "xml" ]
     });
     $("#test2bkformat").autocomplete({              // jquery UI
   	  source: [ "text", "json", "xml" ]
    });
     $("#test3bkformat").autocomplete({              // jquery UI
   	  source: [ "text", "json", "xml" ]
    });
});

// function that manages the 'getBook.java' servlet
// and its method within BookDAO
// uses an if, else if, else statement to 
// POST the data to index.html in the appropriate format
function test_one() {    // one function to determine which format
	var format = $("#testbkformat").val(); 
	var title = $("#testbktitle").val();
	console.log("format:" + format);
	var workingRegion = "#working1";
	$("#test_one").html("");
	$("#test_one_message").html("");
	var queryString = 
		"title=" + escape($("#testbktitle").val()) +      
		"&format=" + escape($("#testbkformat").val());
	$(workingRegion).show();  // GIF LOADING
	if (format == "xml") {
		console.log("xml format");
			var response = "";
			$.ajax({
				type: "POST",
				url: "getBook",
			data: queryString,
			dataType: 'xml',   
			
				//data: data,
			//  //if '//' then allows 'text to be printed
								// gets all the way to here..
			
			complete: function(response) {   // DOES GET THROUGH TO COMPLETE!!!
				$(workingRegion).hide();
				var obj = response.responseXML 
				console.log(response);  // Object
				console.log(obj);   // #document <booklist><book>...
				console.log($(obj).find('title').text());  // text of all titles
				console.log($(obj).find("book"));     // array of books
				console.log($(obj).find('title'));    // array of titles
				
				var length = $(obj).find("book").length ;
				console.log(length);
				if (length == 0) {
					var text = "No Books found with title: " + title;
				}
				else {
				if (length == 1) {
					var text = "Book by Title: " + title;
				}
				else {
					var text = "Multiple Books by Title: " + title;

				}	
				var table_creation = xml_table(obj, 0);
				$('#test_one').append(table_creation);
				}
				$("#test_one_message").html(text);
			}
			});
		}
	else if (format == "json") {
		console.log("json format");
			var response = "";
			$.ajax({
				type: "POST",
				url: "getBook",
			data: queryString,
			dataType: 'json',    
			
				//data: data,
			//  //if '//' then allows 'text to be printed
								// gets all the way to here..
			
			complete: function(response) {   // DOES GET THROUGH TO COMPLETE!!!
				$(workingRegion).hide();
				var obj = response.responseJSON 
				var obj0 = response.responseJSON[0];
				var length = obj.length ;
				console.log(length);
				if (length == 0) {
					var text = "No Books found with title: " + title;
				}
				else {
				if (length == 1) {
					var text = "Book by Title: " + title;
				}
				else {
					var text = "Multiple Books by Title: " + title;
				}	
				var table_creation = table(obj, 0);
				$('#test_one').append(table_creation);
				}
				$("#test_one_message").html(text);		
			}
			});
		}
	else {
		console.log("default format is text");
			var response = "";  
				$.ajax({
				type: "POST",
				url: "getBook",
			data: queryString,
			dataType: 'text',    // auto $.parseXML ?
				//data: data,
			//  //if '//' then allows 'text to be printed
								// gets all the way to here..
			
			complete: function(response) {   
				$(workingRegion).hide();
				console.log(" is text");	
				var obj = response.responseText 
				console.log(obj);  			
				var newObj = obj.split("#");
				var newObj1 = newObj.splice(0,1);
				console.log("books length");
				var bookLength = newObj.length;
				console.log(bookLength);

				var bks = parseInt(newObj.length);
				var lgts = parseInt(newObj1.length);
				console.log("lgts: " + lgts);
				var length = bks/7;
				console.log("The true length is: " + length)
				if (length == 0) {
					var text = "No Books found with title: " + title;
				}
				else {
				if (length == 1) {
					var text = "Book by Title: " + title;
				}
				else {
					var text = "Multiple Books by Title: " + title;
				}	
				var table_creation = tx_table(obj, 0);
				$('#test_one').append(table_creation);
				}
				$("#test_one_message").html(text);
			}
			});	
		}
	}

//function that manages the 'getAllBooks.java' servlet
//and its method within BookDAO
//uses an if, else if, else statement to 
//POST the data to index.html in the appropriate format
function test_all() {    // one function to determine which format
	var format = $("#test2bkformat").val(); 
	console.log("format:" + format);
	var workingRegion = "#working2";
	$("#test_all").html("");
	$("#test_all_message").html("");
	var queryString = 
		"format=" + escape($("#test2bkformat").val()); 
	$(workingRegion).show();  // GIF LOADING
	if (format == "xml") {
		console.log("xml format");
			var response = "";
			$.ajax({
				type: "POST",
				url: "getAllBooks",
			data: queryString,
			dataType: 'xml',    
			
				//data: data,
			//  //if '//' then allows 'text to be printed
								// gets all the way to here..
			
			complete: function(response) {   // DOES GET THROUGH TO COMPLETE!!!
				$(workingRegion).hide();
				var obj = response.responseXML 
				console.log(response); 
				console.log(obj);   // #document <booklist><book>...
				console.log($(obj).find('title').text());  // text of all titles
				console.log($(obj).find("book"));     // array of books
				console.log($(obj).find('title'));    // array of titles
				
				var length = $(obj).find("book").length ;
				console.log(length);
				if (length == 0) {
					var text = "No Books found";				
				}
				else {
				var text = "All Books";	
				var table_creation = xml_table(obj, 0);
				$('#test_all').append(table_creation);
				}
				$("#test_all_message").html(text);
			}
			});
		}
	else if (format == "json") {
		console.log("json format");
			var response = "";
			$.ajax({
				type: "POST",
				url: "getAllBooks",
			data: queryString,
			dataType: 'json',    
			
				//data: data,
			//  //if '//' then allows 'text to be printed
								// gets all the way to here..
			
			complete: function(response) {   // DOES GET THROUGH TO COMPLETE!!!
				$(workingRegion).hide();
				var obj = response.responseJSON 
				var obj0 = response.responseJSON[0];
				var length = obj.length ;
				console.log(length);
				if (length == 0) {
					var text = "No Books found";
				}
				else {
				var text = "All Books";
				var table_creation = table(obj, 0);
				$('#test_all').append(table_creation);
				}
				$("#test_all_message").html(text);		
			}
			});
		}
	else {
		console.log("default format is text");
			var response = "";  
				$.ajax({
				type: "POST",
				url: "getAllBooks",
			data: queryString,
			dataType: 'text',    
				//data: data,
			//  //if '//' then allows 'text to be printed
								// gets all the way to here..
			
			complete: function(response) {   // DOES GET THROUGH TO COMPLETE!!!
				$(workingRegion).hide();
				console.log(" is text");	
				var obj = response.responseText 
				console.log(obj);  			
				var newObj = obj.split("#");
				var newObj1 = newObj.splice(0,1);
				console.log("books length");
				var bookLength = newObj.length;
				console.log(bookLength);
				
				var bks = parseInt(newObj.length);
				var lgts = parseInt(newObj1.length);
				console.log("lgts: " + lgts);
				var length = bks/7;
				console.log("The true length is: " + length)
				if (length == 0) {
					var text = "No Books found";
				}
				else {
					var text = "All Books";
					var table_creation = tx_table(obj, 0);
					$('#test_all').append(table_creation);				
				}
				$("#test_all_message").html(text);
			}
			});	
		}
	}

//function that manages the 'insertBook.java' servlet
//and its method within BookDAO
//uses an if, else if, else statement to 
//POST the data to index.html in the appropriate format
function test_ins() {
var format = $("#test3bkformat").val(); 
var title = $("#test3bktitle").val();
console.log("format:" + format);
var workingRegion = "#working3";
$("#test_ins").html("");
$("#test_ins_message").html("");
var queryString = 
	"title=" + escape($("#test3bktitle").val()) +   
	"&type=" + escape($("#test3bktype").val()) +
	"&year=" + escape($("#test3bkyear").val()) +
	"&author=" + escape($("#test3bkauthor").val()) +
	"&price=" + escape($("#test3bkprice").val()) +
	"&avail=" + escape($("#test3bkavail").val()) +
	"&format=" + escape($("#test3bkformat").val());    
$(workingRegion).show();  // GIF LOADING
if (format == "xml") {
	console.log("xml format");
		var response = "";
		$.ajax({
			type: "POST",
			url: "insertBook",
		data: queryString,
		dataType: 'xml',   
		
			//data: data,
		//  //if '//' then allows 'text to be printed
							// gets all the way to here..
		
		complete: function(response) {   // DOES GET THROUGH TO COMPLETE!!!
			$(workingRegion).hide();
			var obj = response.responseXML 
			console.log(response);  
			console.log(obj);   // #document <booklist><book>...
			console.log($(obj).find('title').text());  // text of all titles
			console.log($(obj).find("book"));     // array of books
			console.log($(obj).find('title'));    // array of titles
			
			var length = $(obj).find("book").length ;
			console.log(length);
			if (length == 0) {
				var text = "Book not added";
			}
			else {
			var text = "Book added";
			var table_creation = xml_table(obj, 1);
			$('#test_ins').append(table_creation);
			}
			$("#test_ins_message").html(text);
		}
		});
	}
else if (format == "json") {
	console.log("json format");
		var response = "";
		$.ajax({
			type: "POST",
			url: "insertBook",
		data: queryString,
		dataType: 'json',   
		
			//data: data,
		//  //if '//' then allows 'text to be printed
							// gets all the way to here..
		
		complete: function(response) {   // DOES GET THROUGH TO COMPLETE!!!
			$(workingRegion).hide();
			var obj = response.responseJSON 
			var obj0 = response.responseJSON[0];
			var length = obj.length ;
			console.log(length);
			if (length == 0) {
				var text = "Book not added";
			}
			else {
			var text = "Book added";	
			var table_creation = table(obj, 1);
			$('#test_ins').append(table_creation);
			}
			$("#test_ins_message").html(text);		
		}
		});
	}
else {
	console.log("default format is text");
		var response = "";  
			$.ajax({
			type: "POST",
			url: "insertBook",
		data: queryString,
		dataType: 'text',    
			//data: data,
		//  //if '//' then allows 'text to be printed
							// gets all the way to here..
		
		complete: function(response) {   // DOES GET THROUGH TO COMPLETE!!!
			$(workingRegion).hide();
			console.log(" is text");	
			var obj = response.responseText 
			console.log(obj);  		
			var newObj = obj.split("#");
			var newObj1 = newObj.splice(0,1);
			console.log("books length");
			var bookLength = newObj.length;
			console.log(bookLength);
			
			var bks = parseInt(newObj.length);
			var lgts = parseInt(newObj1.length);
			console.log("lgts: " + lgts);
			var length = bks/7;
			console.log("The true length (text) is: " + length)
			if (length == 0) {
				var text = "Book not added";
				console.log(text);
			}
			else {
			var text = "Book added";
			var table_creation = tx_table(obj, 1);
			$('#test_ins').append(table_creation);
			}
			$("#test_ins_message").html(text);
		}
		});	
	}
}

//function that creates a table for the 'json' formatted and POSTED data
// to be displayed in, creating a vivid and clear user interface
//for viewing the data
function table(obj, num) {  // for JSON
	var tb = "\"table\"";
	if (num==1) {
		var content = "<table class ='items'>" +
		"<th>Title</th>" +
		"<th>Type</th>" +
		"<th>Year</th>" +
		"<th>Author</th>" +
		"<th>Price</th>" +
		"<th>Availability</th></tr>" ;
	for(i=0; i < obj.length; i++){  // per Book
		var result = 
			"<td>" + obj[i].title + "</td>" +
		"<td>" + obj[i].type + "</td>" +
		"<td>" + obj[i].year + "</td>" +
		"<td>" + obj[i].author + "</td>"  +
		"<td>" + obj[i].price + "</td>" +
		"<td>" + obj[i].avail + "</td>" ;
		    content += "<tr>" + result + "</tr>";
	}   
	content += "</table></br>"   // SUCCESS!!
		return(content);	
	}
	else {
	var content = "<table class ='items'>" + "<tr><th>ID</th>" +
			"<th>Title</th>" +
			"<th>Type</th>" +
			"<th>Year</th>" +
			"<th>Author</th>" +
			"<th>Price</th>" +
			"<th>Availability</th></tr>" ;
		//console.log(content);
		for(i=0; i < obj.length; i++){  // per Book
			console.log("change");
			console.log(obj[i]);
			console.log(obj[i].type);   
			var result = 
				"<td>" + obj[i].bookId + "</td>" +
				"<td>" + obj[i].title + "</td>" +
			"<td>" + obj[i].type + "</td>" +
			"<td>" + obj[i].year + "</td>" +
			"<td>" + obj[i].author + "</td>"  +
			"<td>" + obj[i].price + "</td>" +
			"<td>" + obj[i].avail + "</td>" ;
			    content += "<tr>" + result + "</tr>";
		}   
		content += "</table></br>"   // SUCCESS!!
			return(content);
}
}

//function that creates a table for the 'text' formatted and POSTED data
//to be displayed in, creating a vivid and clear user interface
//for viewing the data
function tx_table(obj, num) {   // for text
	var tb = "\"table\"";
 // splits every attribute
	var newObj = obj.split("#");
	console.log("books length");
	var bookLength = newObj.length;
	console.log(bookLength);
if (num==1) {
		var newObj1 = newObj.splice(0,2);
		var noBooks = newObj.length/7;
		var bookLength = newObj.length;
		var bks = parseInt(newObj.length);
		console.log("bks: " + bks);
		var content = "<table class ='items'>" +
		"<th>Title</th>" +
		"<th>Type</th>" +
		"<th>Year</th>" +
		"<th>Author</th>" +
		"<th>Price</th>" +
		"<th>Availability</th></tr>" ;
		var result = "";
		for (j=0; j < bks; j += 6) {
			 // // gets all 7 attributes pr book
				result += ("<tr><td>" + newObj[j] + "</td>" +
						"<td>" + newObj[j+1] + "</td>" +
						"<td>" + newObj[j+2] + "</td>" +
						"<td>" + newObj[j+3] + "</td>" +
						"<td>" + newObj[j+4] + "</td>" +
						"<td>" + newObj[j+5] + "</td></tr>" );
				//console.log(result);
			}
			//console.log(result);
		}
	else {
		var newObj1 = newObj.splice(0,1);
		var noBooks = newObj.length/7;
		var bookLength = newObj.length;
		var bks = parseInt(newObj.length);
		console.log("bks: " + bks);
		var content = "<table class ='items'>" + "<tr><th>ID</th>" +
		"<th>Title</th>" +
		"<th>Type</th>" +
		"<th>Year</th>" +
		"<th>Author</th>" +
		"<th>Price</th>" +
		"<th>Availability</th></tr>" ;
	//console.log(content);
		var result = "";
		for (j=0; j < bks; j += 7) {
			 // // gets all 7 attributes pr book
				result += ("<tr><td>" + newObj[j] + "</td>" +
						"<td>" + newObj[j+1] + "</td>" +
						"<td>" + newObj[j+2] + "</td>" +
						"<td>" + newObj[j+3] + "</td>" +
						"<td>" + newObj[j+4] + "</td>" +
						"<td>" + newObj[j+5] + "</td>" +
						"<td>" + newObj[j+6] + "</td></tr>" );
				//console.log(result);
			}
			//console.log(result);
		}
		    content += result;  
		content += "</table></br>"   // SUCCESS!!
			//console.log(content);
			return(content);
}

//function that creates a table for the 'xml' formatted and POSTED data
//to be displayed in, creating a vivid and clear user interface
//for viewing the data
function xml_table(obj, num) {     // for XML
	var tb = "\"table\"";
	if (num==1) {
		var content = "<table class ='items'>" + 
		"<th>Title</th>" +
		"<th>Type</th>" +
		"<th>Year</th>" +
		"<th>Author</th>" +
		"<th>Price</th>" +
		"<th>Availability</th></tr>" ;

 if ($(obj).find("book").length > 0) {

	 $(obj).find("book").each(function() {  /// for loop for XML
         content += "<tr>";
         content += "<td>" + $(this).find("title").text() + "</td>";
         content += "<td>" + $(this).find("type").text() + "</td>";   
         content += "<td>" + $(this).find("year").text() + "</td>";
         content += "<td>" + $(this).find("author").text() + "</td>";
         content += "<td>" + $(this).find("price").text() + "</td>";
         content += "<td>" + $(this).find("avail").text() + "</td>";
         content += "</tr>";
     });

     content += "</table>";
 }
		return(content);	
	}
	else {
	var content = "<table class ='items'>" + "<tr><th>ID</th>" +
			"<th>Title</th>" +
			"<th>Type</th>" +
			"<th>Year</th>" +
			"<th>Author</th>" +
			"<th>Price</th>" +
			"<th>Availability</th></tr>" ;
	
	 if ($(obj).find("book").length > 0) {

		 $(obj).find("book").each(function() {
             content += "<tr>";
             content += "<td>" + $(this).find("bookId").text() + "</td>";
             content += "<td>" + $(this).find("title").text() + "</td>";
             content += "<td>" + $(this).find("type").text() + "</td>";   
             content += "<td>" + $(this).find("year").text() + "</td>";
             content += "<td>" + $(this).find("author").text() + "</td>";
             content += "<td>" + $(this).find("price").text() + "</td>";
             content += "<td>" + $(this).find("avail").text() + "</td>";
             content += "</tr>";
         });

         content += "</table>";
     }
			return(content);		
	}
}		