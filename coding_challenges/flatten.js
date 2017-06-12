function flatten(arr, newArray = []) {

        for (let i =0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {flatten (arr[i], newArray)} 
                else {
                    newArray.push(arr[i]);
                }

        }
 return newArray;
}

var newArray = flatten ([1,2,[2,3],[3,4,5]]);
console.log(newArray);