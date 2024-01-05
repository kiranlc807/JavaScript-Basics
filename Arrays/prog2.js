//Arrays Operations using methods 

let values = [] // created an empty array

// .push(values) is a method used to add the value to the array
values.push(5)
values.push(8)
values.push(9)
values.push(4)
values.push(2)

console.log("Array length is : "+values.length);
console.log(values);

//.pop() is a method used to remove the last value from an array
console.log(values.pop()); // 2
console.log(values.pop()); // 4

let data = [45,22,78,98]

// .concat() merge the two Array
let result = values.concat(data) 

console.log(result); //[5,8,9,45,22,78,98]

