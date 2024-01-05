let value = [4,9,7,2,5,8,6]

let res = squareAll(value,(x)=>x*x)

function squareAll(value,callback)
{
    for(let i=0;i<value.length;i++)
    {
        value[i]=callback(value[i]);
    }
    return value;
}

console.log(res);