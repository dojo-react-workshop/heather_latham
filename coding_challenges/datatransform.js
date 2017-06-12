//array of objects; we care about city
//spit out an array of unique cities

var data=[
    {
        "name": "holly",
        "address": "w wisconsin ave",
        "city": "Milwaukee"
    },
    {
        "name": "holly",
        "address": "w wisconsin ave",
        "city": "San Francisco"
    },
     {
        "name": "holly",
        "address": "w wisconsin ave",
        "city": "San Francisco"
    }
]

// uniqueCities = (arr)=>{
//     let unique=[];
//     arr.forEach(({ city })=>{
//         if(unique.indexOf(city) === -1 ){
//             unique.push(city);
//         }
//     })
//     return unique;
// }

uniqueCities = (arr)=>{
    let unique={
    };
    arr.forEach(({ city })=>{
            unique[city]=city;
    })
    return Object.keys(unique);
}

console.log(uniqueCities(data))