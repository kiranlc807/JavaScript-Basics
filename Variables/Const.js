// Const is keyword used to declare a variable that can't be reassigned a new value
//  And it is also has the Block Scope and can't Re-Declared

const PI = 3.1415

//    PI=3.14     -> Gives the error
//    PI=PI+10    -> Gives the error
{
    const PI=23
    console.log(PI)  // Block Scope
}
console.log(PI)