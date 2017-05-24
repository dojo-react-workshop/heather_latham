
function all(promise1, promise2){
	return new Promise(function (fulfill, reject) {
    	var counter = 0;
    	var arr = [];

    	promise1.then(function(val){
    		arr[0] = val;
    		counter++;

    		if (counter >= 2) {
    			fulfill(arr);
    		}
    	});

    	promise2.then(function(val){
    		arr[1] = val;
    		counter++;

    		if (counter >= 2) {
    			fulfill(arr);
    		}
    	});
    });
}

all(getPromise1(),getPromise2()).then(console.log);