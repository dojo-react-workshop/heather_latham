'use strict'

var fs = require("fs");

var filePath = process.argv[2];

var data = fs.readFileSync(filePath);
	
var string = data.toString();
var count = 0;

for (var i = 0; i < string.length; i++){
	if (string[i] === '\n')
		count++;	
}
console.log(count);
