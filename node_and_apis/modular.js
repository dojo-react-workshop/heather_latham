'use strict'

var fs = require("fs");
var path = require("path");

const myModule = require('./modulefile.js');

var dirPath = process.argv[2];
var fileType = process.argv[3];

myModule(dirPath,fileType,function (err, arr){
  if (err) {
    return console.error('There was an error:', err);
  }
  for (var i = 0; i < arr.length; i++){
  	console.log(arr[i]);
  }
});