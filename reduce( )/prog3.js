let arr = [24,57,45,48,96,30,29,44]

let sum = arr.reduce(function(accumalator,currentValue){ // adding all the array values
    console.log("accumalator--->",accumalator);
    console.log("currentValue--->",currentValue);
    return accumalator=accumalator+currentValue
})

console.log(sum);