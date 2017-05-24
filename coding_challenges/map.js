//the map function (accept a callback, build us a new array with whatever we return)
const a = [1,2,3,4,5,6];
const mappedArr = a.map(function(value){
	return value * 2;
});
console.log(mappedArr);


// this is what the map function does behind the scenes

Array.prototype.map = function(callback){
	const newArray = [];
	this.forEach(function(value){
		newArray.push(callback(value));
	});
	return newArray;
};

console.log(a.map(function(value, index) {
	return value * 2;
}));