let ar = [10,45,20,38,50,88,64]

ar.splice(3,1) // it remove the value at specified index.(38)

console.log(ar); // [10,45,20,50,88,64]

ar.splice(3) // it removes all the values after the 4th index.[88, 64]

console.log(ar); // [10,45,20,50]

ar.splice(2,1,48) // it will remove the 2nd index value and add 48 to that position

console.log(ar);  //[10,45,48]

ar.splice(2,1,78,54,32,56)  // it remove 2nd index values and add 78,54,32,56

console.log(ar)  // [ 10, 45, 78, 54, 32, 56 ]

// slice() break the arrays to stating point index to ending point.

let res = ar.slice(1,4)

console.log(res);

// join() return the Array as String formate 
 
let words = ['orange','mango','apple']

let sen = words.join(" and ") // by passing argument it addend between value.

console.log(sen);
