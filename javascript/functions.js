function runningLogger (){
	console.log('I am running!');
}

runningLogger();

function multiplyByTen(value){
	return value*10; 
}

console.log(multiplyByTen(10));

function stringReturnOne(){
	return "Hello";
}

console.log(stringReturnOne());

function stringReturnTwo(){
	return "World!";
}

console.log(stringReturnTwo());

function caller(func) {
	if (typeof func  === "function"){
		func();
	}
}

function myDoubleConsoleLog(func1, func2){
	if (typeof func1  === "function" && typeof func2  === "function"){
		console.log(func1());
		console.log(func2());
	}
}

myDoubleConsoleLog(stringReturnOne, stringReturnTwo);


function caller2(func3){
	console.log("starting");
	setTimeout (function(){
		if (typeof func3 === "function"){
			func3(stringReturnOne, stringReturnTwo);
		}}, 2000);
	console.log("ending");
	return "interesting";
}

console.log(caller2(myDoubleConsoleLog));



