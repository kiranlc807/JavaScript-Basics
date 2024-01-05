
// Removing Odd Number from a Array

const myNumber = [0,1,2,3,4,5,6,7,8,9]

const EvnNumber = removeNeg(myNumber , (x) => x%2==0)  //Passing Fuction as an Arguments

console.log(EvnNumber)         // Result Printing  

function removeNeg(numbers,CallBack){
    const myArray = [];
    for(const i of numbers)
    {
        if(CallBack(i))        // Calling the CallBack Function
            myArray.push(i)
    }
    return myArray;            // return the new Array
}

