// Asynchronous programming is an essential concept in JavaScript that allows 
//your code to run in the background without blocking the execution of other code.

console.log("start")

let n = "Hello"

console.log(n)

setTimeout(function(){  // setTimeout is an Asynchronous Function
    n="World!"
    console.log(n)
},5000);


console.log("End")
