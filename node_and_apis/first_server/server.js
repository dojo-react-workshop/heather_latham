//ajacent to server js file, make an html file, when server is git with a request, the contents of that file are sent back to the browser

var fs = require("fs");
var http = require('http');

var server = http.createServer(function(request, response){

	fs.readFile('./index.html', 'utf8', function(err, fileContents){
		response.end(fileContents);
		//callback function that is supplied with the contents of the file when we are done reading it
	});

});

server.listen(8000);

