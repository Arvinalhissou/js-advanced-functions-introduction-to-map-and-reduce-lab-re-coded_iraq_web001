// Your code here
function mapToNegativize(result){
    return result.map(x => x * -1);
}

function mapToNoChange(result){
    return result.map(x => x);
}

function mapToDouble(sourceArray){
    return result.map(x => x*2);
}
function mapToSquare(sourceArray){
    return sourceArray.map(x => x*x);
}
function reduceToTotal(sourceArray, startingPoint = 0){
    const total = function(accumulator, currentValue){ return accumulator + currentValue }

    return sourceArray.reduce(total, startingPoint)
}
