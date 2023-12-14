let value = [6,3,8,4,2,9]
 
// .shift() is used to remove the value from begining
console.log(value.shift()); // 6
console.log(value.shift()); // 3

console.log(value) // [8, 4, 2, 9]

// .unshift() is a method used to add the value at the begining
console.log(value.unshift(4));  // [4, 8, 4, 2, 9]

console.log(value.unshift(2));  // [2, 4, 8, 4, 2, 9]

console.log(value[1]);

// Deleting elements leaves undefined holes in an array
delete value[1]  

console.log(value[1])  //  [2, undefined, 8, 4, 2, 9]