//how many ways can these denominations be used to generate the amount
//1111
//22
//211
//31

//would return 4, 4 ways to generate the amount of 4 with these denominations

function fetchChangeData(target, coins, sum=0, index=0){

    if (sum === target) {
        return 1;
    }

    if (index >= coins.length || sum > target) return 0

    let count = 0;
    let newSum = sum;

    for (let i = 0; newSum <= target; i++){
        newSum = coins[index]*i + sum
        count += fetchChangeData(target, coins, newSum, index+1)
    }

    return count;
}



console.log(fetchChangeData(4, [1,2,3]));
console.log(fetchChangeData(10, [1,2,3]));
console.log(fetchChangeData(1, [1,2,3]));