let arr = [24,57,45,48,96,30,29,44]

let res = arr.filter(function (element,index) { // filter based on even index and even value.
        if(element%2==0&&index%2==0)
            return true
})

console.log("Old Array",arr);

console.log("New Array",res);