'use strict'

// given an array of terrace hights, and it's raining, configure how much water is caught
// by each terrace

//[3,1,5,2,6,4,2,3] = volume = 6

//         * 
//     *   *
//     *   * *
// *   *   * *   *
// *   * * * * * *
// * * * * * * * * 

function findMaxInd(arr){
	let maxVal = arr[0];
	let index = 0;
	for (let i = 1; i < arr.length; i++){
		if (arr[i] > maxVal){
			maxVal = arr[i];
			index = i;
		}
	}
	return index;
}

function terraceHeights(arr){
	let left = 0;
	let max = findMaxInd(arr);
	let count = 0;
	for (let i = 1; i < max; i++){
		if (arr[i] < arr[left]){
			count += (arr[left]-arr[i]);
		} else {
			left = i;
		}
	}

	let rt = arr.length-1;
	for (let i = arr.length-2; i > max; i--){
		if (arr[i] < arr[rt]){
			count += (arr[rt]-arr[i]);
		} else {
			rt = i;
		}
	}
	return count;
}

const arr = [1,3,5,4,1,6,3,4];
console.log(terraceHeights(arr));