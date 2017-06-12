function binaryStringExp(str, base='', results=[]){
    if(str.length===0){
        results.push(base);
    }else{
        if(str[0] ==='?'){
            binaryStringExp(str.slice(1), base + '0', results)
            binaryStringExp(str.slice(1), base + '1', results)
        }else{
            binaryStringExp(str.slice(1), base+str[0],results)
        }
    }
    return results;
}

console.log(binaryStringExp('10?11?'))