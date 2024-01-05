let arr = [15,28,46,34,87]

let res = arr.map(function(element,index){
    if(index%2==0) // applying only for even index values.
        return element*2
    else
        return element
    });

console.log(res);