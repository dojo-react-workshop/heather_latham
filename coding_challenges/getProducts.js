'use strict'

var myArray = [5,1,3,8,2];

// var myNewArray = [48, 240, 80, 30, 120];

//no division, optimize for time -- read in an aray and find the product of 
//all the numbers apart from the index you are on

function  getProducts(arr) {
	let afters = [];
	let before = [];
	let newArr = [];
	let prod = 1;

	for (let i = arr.length-1; i >=0; i--){
		afters[i] = prod;
		prod = prod * arr[i];
	}

	prod = 1;
	for (let i = 0; i < arr.length; i++){
		before[i] = prod;
		prod = prod * arr[i];
	}

	for (let i = 0; i < arr.length; i++){
		newArr[i] = before[i] * afters[i];
	}

	return newArr;
}

console.log(getProducts(myArray));
