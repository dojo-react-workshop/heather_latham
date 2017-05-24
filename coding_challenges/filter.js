//the filter function (accept a callback, builds us a new array with the items in that we want to keep, true keeps in array, false leaves out of array)
const filteredArr = a.filter(function(value){
	return (value%2===0);  //keeps even numbers
});
console.log(filteredArr);


// this is what the filter function does behind the scenes

Array.prototype.filter = function(callback){
	const newArray = [];

	for (let i = 0; i < this.length; i += 1){
		if (callback(this[i])) {
			newArray.push(this[i]);
		}
	}
	return newArray;
};

const a = [1,2,3];

console.log(a.filter(function(value, index) {
	return (value%2 === 0);
}));