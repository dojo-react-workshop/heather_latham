'use strict'

var fs = require("fs");

var filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, data) => {  // this one takes a callback so the rest of the code can keep processing, now asynchronous
	if (err) throw err;
	var string = data.toString();
	var count = 0;

	for (var i = 0; i < string.length; i++){
		if (string[i] === '\n')
			count++;	
	}
	console.log(count);
});


//answer from program
    // var fs = require('fs')
    // var file = process.argv[2]
    
    // fs.readFile(file, function (err, contents) {
    //   if (err) {
    //     return console.log(err)
    //   }
    //   // fs.readFile(file, 'utf8', callback) can also be used
    //   var lines = contents.toString().split('\n').length - 1
    //   console.log(lines)
    // })

