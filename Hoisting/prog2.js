//Function Hoisting 
add(10,10) 

function add(x,y){
    console.log(x+y);
}

//Function Hosisting with return 

let a = sub(10,5)

function sub(x,y){
    return x-y
}

console.log(a);

//Function Expression Hoisting is Not Possible
let res = mul(10,10) 
console.log(res);
let mul = (x,y)=>x*y // the function Expression as to declare first before calling 