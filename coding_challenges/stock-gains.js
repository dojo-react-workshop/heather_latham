'use strict'
//APPLE
// Can't buy and sell in same time slots
//return best profit could have made from one purchase and one sale
//for this one, buy low at 5 and sell high at 11

// function maxProfit(arr) {
//     var buyIndex = 0;
//     var sellIndex = 1;
//     var maxProfit = arr[sellIndex] - arr[buyIndex];

//    for(let i=0; i<arr.length; i++) {
//         for(let x=i+1; x<arr.length; x++) {
          
//             if((arr[x]-arr[i]) > maxProfit) {
//                 buyIndex = i;
//                 sellIndex = x;
//                 maxProfit = arr[x]-arr[i];
//             }
//         }
//     }

//    return({buyIndex:buyIndex, sellIndex:sellIndex, maxProfit:maxProfit});
// }

// console.log(maxProfit(applePricesYesterday)); 

//use this one to only loop once (this is hte concept of the greedy solution, means 
//keeping the best solution so far and throwing away the rest)

function maxProfit(arr) {
    if(arr.length < 2){
        throw new Error('Must provide at least 2 prices.');
    }
    let buy = arr[0];
    let maxProfit = arr[1] - arr[0];

   for(let i=1; i<arr.length; i++) {
        if((arr[i]-buy) > maxProfit){
            maxProfit = arr[i]-buy;
        }
        if(arr[i] < buy){
            buy = arr[i];
        } 
    }
   return maxProfit;
}

var arr=[2,3,5,7,13,9]
const applePricesYesterday = [10,7,5,8,11,9]
var arr_2 = [1,-3]

console.log(maxProfit(arr))
console.log(maxProfit(arr_2))
console.log(maxProfit(applePricesYesterday))
