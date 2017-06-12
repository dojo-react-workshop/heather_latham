//Highest Product of 3

//Given an array of integers, find the highest product you can get from three of the integers.

function maxProduct(arr){
	
    let max1 = arr[0]
    let max2 = arr[1]
    let max3 = arr[2]
    let min1 = arr[0]
    let min2 = arr[1]

    arr.forEach((i)=>{
        if (i > max1){
            max3=max2
            max2=max1
            max1=i}
        else if (i > max2){
            max3=max2
            max2=i}
        else if (i > max3)
            max3=i
        if (i < min1){
            min2=min1
            min1=i}

        else if (i < min2)
            min2=i
    })

    let a = max1*max2*max3
    let b = max1*min1*min2
    
    console.log(max1,max2,max3)
    console.log(min1,min2)
    if (a > b)
        return a
    else
        return b

}


console.log(maxProduct([-1,4,-5,2,3]))