var fs = require("fs");
var path = require("path");

module.exports = function myModuleFunction(dirPath,fileType,cb) {

	fs.readdir(dirPath, (err, files) => {
	if (err) return cb(err);
    var fileTypeE = '.' + fileType;
    var arr = files;
    var newArr = [];
	for (var i = 0; i < arr.length; i++){
		if (path.extname(arr[i]) === fileTypeE)
			newArr.push(arr[i]);	
	}
	cb(null, newArr);
	});
};