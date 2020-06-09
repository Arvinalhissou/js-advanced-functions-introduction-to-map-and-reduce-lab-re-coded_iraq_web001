// Your code here
function mapToNegativize(result){
    return result.map(x => x * -1);
}

function mapToNoChange(result){
    return result.map(x => x);
}

function mapToDouble(result){
    return result.map(x => x*2);
}
function mapToSquare(result){
    return result.map(x => x*x);
}
function reduceToTotal(accumulator, currentValue){ return accumulator + currentValue }