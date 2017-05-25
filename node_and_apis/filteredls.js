'use strict'

var fs = require("fs");
var path = require("path");

var dirPath = process.argv[2];
var fileType = "." + process.argv[3];

fs.readdir(dirPath, (err, files) => {  // this one takes a callback so the rest of the code can keep processing, now asynchronous
	if (err) throw err;
    var arr = files;
	for (var i = 0; i < arr.length; i++){
		if (path.extname(arr[i]) === fileType)
			console.log(arr[i]);	
	}
});


// solution from program
    // var fs = require('fs')
    // var path = require('path')
    
    // var folder = process.argv[2]
    // var ext = '.' + process.argv[3]
    
    // fs.readdir(folder, function (err, files) {
    //   if (err) return console.error(err)
    //   files.forEach(function (file) {
    //     if (path.extname(file) === ext) {
    //       console.log(file)
    //     }
    //   })
    // })
