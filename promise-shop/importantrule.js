
function alwaysThrows(){
	throw new Error("OH NOES");
}

function iterate(int){
	console.log(int);
	return int + 1;
}

Promise.resolve(iterate(1))
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(alwaysThrows)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then (null, console.log);


  // * Create a function `alwaysThrows` that throws an `Error` withtext `"OH NOES"`;
  // * Create a function `iterate` that prints the first argument(an integer) to it and then returns that argument + 1;
  // * Create a promise chain that wraps your iterate method using Q's`fcall` then a series of iterations that attempts to perform `iterate`a total of 10 times.
  // * Attach `console.log` as a rejection handler at the bottom of yourchain.
  // * Insert a call to `alwaysThrows` after your 5th call of `iterate`