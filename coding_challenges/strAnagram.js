//Given a string, return an array where each element is a string representing a diffrent anagram 
//(a different sequence of the letters in that string.

function anaGram(str, base='', arr=[]){
    if(str===''){
        arr.push(base)
    }
    for(let i=0; i< str.length; i++){
        let newBase = base+str.slice(i,i+1)
        let newStr = str.slice(0,i) + str.slice(i+1)
        anaGram(newStr, newBase, arr)
    }
    
    return arr
}
console.log(anaGram('tar'))

