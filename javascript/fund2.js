function sum(x, y){
	var finalsum = 0;
	for (var i = x; i <= y; i++){
		finalsum += i;
	}
	console.log(finalsum);
}

var x;
var y;
sum(1,3);

var arr = [1, 5, 90, 25, -3, 0];

function minVal(arr){
	var min = arr[0];
	for (var i = 1; i < arr.length; i++){
		if (arr[i] < min){
			min = arr[i];
		}
	}
	return(min);
}

console.log(minVal(arr));

function avgVal(arr){
	var avg = 0;
	for (var i = 0; i < arr.length; i++){
		avg = avg + arr[i];
	}
	avg = avg/arr.length;
	return(avg);
}

console.log(avgVal(arr));

var person = {
 name: 'Heather',
 distance_traveled: 0,
};

function say_name(obj){
	console.log(obj.name);
}

say_name(person);

function say_something(parm, obj){
	console.log(obj.name + " says " + parm);
}

say_something("I am cool", person);

function walk(obj){
	obj.distance_traveled += 3;
	console.log(obj.name + " is walking");
}

walk(person);

function run(obj){
	obj.distance_traveled += 10;
	console.log(obj.name + " is running");
}

run(person);

function crawl(obj){
	obj.distance_traveled += 1;
	console.log(obj.name + " is crawling");
}

crawl(person);

console.log(person);



