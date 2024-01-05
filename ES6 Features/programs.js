// 1. Block Scoped Variable:

let a = 10
const b = 20
console.log(a); //10
console.log(b); //20

//2. String Interpolution:
const nm = "kirana"
console.log(`Hello, ${nm}!!`);


//3. Arrow function:
let add = (x,y)=>x+y;
console.log(add(10,20));

//4. Spread Operator:
let ar1 = [2,4,6,8]
let ar2= [1,3,5,7]
let newAr = [...ar1,...ar2]
console.log(newAr)  // [2,4,6,8,1,3,5,7]

//5. Destructuring:
//Array
const number = [1,2,3]
const[x,y,z] = number
console.log(z);
console.log(y);
console.log(z);


//Object Destructuring
const person = {
    name:"kirana",
    age: 22,
    phno: 9876543210  
}

const {name,age,phno} = person;
console.log(name);
console.log(age);
console.log(phno);

//6. for/Of loop:
const cars = ["BMW","Volvo","Mini"]
let text = "";

for(let x of cars)
{
    text=text+x+" ";
}
console.log(text)

//7. Classes:
class Employee{
    constructor(empid,ename){
        this.empid=empid
        this.ename=ename
    }
}
let empObj = new Employee(101,"abc")
console.log(empObj);

//8. Promise :
let promise = new Promise(function(resolve,reject){
    let a =10
    if(a%2==0)
        resolve("Resolved")
    else
        reject("Rejected")
}); //producing code 

//Consuming Code.
promise.then(function(result){
        console.log(result)
    }).catch(function(result){
        console.log(result)
    });

