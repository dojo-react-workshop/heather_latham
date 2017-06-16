function overlap(obj1, obj2){
    let result = {
        leftX:null,
        bottomY:null,
        width:null,
        height:null
    }

    let breakFlag = false;

    //Iterate over object 1 to determine if and of the X's and Y's are within the 
    //range of obj2's width and height spans.  If so, set the bottom left corner
    //and break the loop.
    for (let x=obj1.leftX; x <= obj1.leftX + obj1.width; x++){
        for (let y=obj1.bottomY; y <= obj1.bottomY + obj1.height; y++){
            let insideX=(x >= obj2.leftX && x <= obj2.leftX + obj2.width);
            let insideY=(y >= obj2.bottomY && y <= obj2.bottomY + obj2.height);
            if (insideX && insideY){
                if (result.leftX === null){
                    result.leftX = x;
                    result.bottomY = y;
                    breakFlag = true;
                    break;
                }
            }
        }
        if (breakFlag) break;
    }
    
    //If there was overlap, set the width and height based on which rectangle ended first. 
    if(result.leftX != null){
        if(result.width === null)
            result.width = Math.min(obj1.leftX + obj1.width, obj2.leftX + obj2.width) - result.leftX;
        if(result.height === null)
            result.height = Math.min(obj1.bottomY + obj1.height, obj2.bottomY + obj2.height) - result.bottomY;
    }
    return result;
}

const obj1 = []
const obj2 = []

console.log(overlap(obj1, obj2))