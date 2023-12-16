// reduce((accumalator,currentValue),intialValue)
let arr = [24,57,45,48,96,30,29,44]

let intialValue=0
// adding all the array values
let sum = arr.reduce((accumalator,currentValue)=> accumalator=accumalator+currentValue,intialValue)

console.log(sum);