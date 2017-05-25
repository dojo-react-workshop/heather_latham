'use strict'
//APPLE
// Can't buy and sell in same time slots
//return best profit could have made from one purchase and one sale
//for this one, buy low at 5 and sell high at 11

const applePricesYesterday = [5,4,3,2,1,1]; //different trades at these prices


function maxProfit(arr) {
    var buyIndex = 0;
    var sellIndex = 1;
    var maxProfit = arr[sellIndex] - arr[buyIndex];

   for(let i=0; i<arr.length; i++) {
        for(let x=i+1; x<arr.length; x++) {
          
            if((arr[x]-arr[i]) > maxProfit) {
                buyIndex = i;
                sellIndex = x;
                maxProfit = arr[x]-arr[i];
            }
        }
    }

   return({buyIndex:buyIndex, sellIndex:sellIndex, maxProfit:maxProfit});
}

console.log(maxProfit(applePricesYesterday)); 


// function getMaxProfit(applePricesYesterday, ind){
// 	if (ind+1 >= applePricesYesterday.length){
// 		// throw new Error('Must provide more than 1 price');
// 		return;
// 	}

// 	let maxDiff = applePricesYesterday[ind+1] - applePricesYesterday[ind];

// 	for (let i = ind+2; i < applePricesYesterday.length; i++){
// 		let diff = applePricesYesterday[i] - applePricesYesterday[ind];
// 		if (diff > maxDiff){
// 			maxDiff = diff;
// 		}
// 	}

// 	let nextMax = getMaxProfit(applePricesYesterday, ind+1);
// 	if (nextMax === undefined){
// 		return maxDiff;
// 	} else if (maxDiff > nextMax){
// 		return maxDiff;
// 	} else {
// 		return nextMax;
// 	}

// }

// console.log(getMaxProfit(applePricesYesterday, 0)); 