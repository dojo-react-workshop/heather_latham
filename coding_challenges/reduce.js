const array = [1,2,3,4];


const sum = array.reduce((currentSum, currentVal) => {
	return currentSum + currentVal;
}, 100);  //100 is the initial starting value

console.log(sum);



// this is what the reduce function does behind the scenes

Array.prototype.reduce = function(callback, initialAcc){
	var start;
	var cAcc;
	if (initialAcc === undefined){
		cAcc = this[0];
		start = 1;
	} else {
		cAcc = initialAcc;
		start = 0;
	}
	for (var i = start; i < this.length; i++){
		cAcc = callback(cAcc, this[i]);
	}
	return cAcc;
};

function callback(sum2, currentacc){
	return sum2 + currentacc;
}

console.log(array.reduce(callback, 100)); // starts at 100