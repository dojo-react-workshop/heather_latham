function first(){
	return "Secret Val";
}

var firstPromise = new Promise(function(resolve, reject){
	resolve(first());
});

var secondPromise = new Promise(function(resolve, reject){
	resolve(firstPromise);
});


secondPromise.then(console.log);



// var firstPromise = first();

// var secondPromise = firstPromise.then(function (val) {
//   return second(val);
// });

// secondPromise.then(console.log);