//ajacent to server js file, make an html file, when server is git with a request, the contents of that file are sent back to the browser

var fs = require("fs");
var http = require('http');

var server = http.createServer(function(request, response){

	console.log(request.url);

	var page = "";

	if (request.url == '/'){
		page = "./index.html";
	} else if (request.url == '/ninjas'){
		page = "./ninjas.html";
	} else if (request.url == '/dojos/new'){
		page = "./dojos.html";
	}

	if (page){
		fs.readFile(page, 'utf8', function(err, fileContents){
			response.end(fileContents);
		});
	} else {
        response.end("<html><h2>URL Requested is not available</h2></html>");
    }

});

server.listen(6789);

