var person = {};

function personConstructor(person, name){
	person = {name: name, distance_traveled: 0};
	return person;
}

person = personConstructor(person, "Heather");

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

// ninja's

var ninja = {};

function ninjaConstructor(ninja, name, cohort){
	ninja = {name: name, cohort: cohort, beltlevel: 'yellow-belt'};
	return ninja;
}

function levelUp(ninja){
	if (ninja.beltlevel === 'yellow-belt') {
		ninja.beltlevel = 'orange-belt';
	} else if (ninja.beltlevel === 'orange-belt') {
		ninja.beltlevel = 'green-belt';
	} else if (ninja.beltlevel === 'green-belt') {
		ninja.beltlevel = 'purple-belt';
	} else if (ninja.beltlevel === 'purple-belt') {
		ninja.beltlevel = 'brown-belt';
	} else if (ninja.beltlevel === 'brown-belt') {
		ninja.beltlevel = 'red-belt';
	} else if (ninja.beltlevel === 'red-belt') {
		ninja.beltlevel = 'black-belt';
	} else ;
	return ninja;
}

ninja = ninjaConstructor(ninja, "Heather", "Rob");

console.log(ninja);
levelUp(ninja);
console.log(ninja);
levelUp(ninja);
console.log(ninja);
levelUp(ninja);
console.log(ninja);


