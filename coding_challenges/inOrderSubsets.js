
'use strict'

const str = 'abc';
// answer arr = ['', 'c', 'b', 'a', 'ab', 'ac','bc,'abc']


//one way
function subsets(str=''){
    if(str.length===0){
        return [''];
    }
    let subs = subsets(str.slice(1));
    let count = subs.length;
    for(let i=0; i<count; i++){
        subs.push(str.slice(0,1) + subs[i]);
    }
    return subs;
}

console.log(subsets(str));

//second way
