//given an array, see if there is a balance point


function bp(arr){
	let sum1 = arr.reduce(function(accum, val){
		return accum + val;
	})

	let sum2 = 0;

	for (let i = 0; i < arr.length; i++){
		if (sum1 === sum2) {return true;}
		let current = arr[i];
		sum2 += current;
		sum1 -= current;
	}

	return false;

}


console.log(bp([20,-10,10]))