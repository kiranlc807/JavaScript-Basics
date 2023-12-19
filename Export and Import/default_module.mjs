let ar = [1,2,3,4,5]
// let sum = ar.reduce((sum,n)=>sum+n)
let summ= ()=>{
    let res=0;
    for(let i=0;i<ar.length;i++)
    {
        res=res+ar[i]
    }
    return res
}
export default summ