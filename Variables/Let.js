// veriable declared with let have Block scope 
// variable declared with let must be Declared before use 
// variable declared with let can't be Redeclared in the same scope 

let a=10
{
    let a=30
    console.log(a)  //Block Scope
}
console.log(a)