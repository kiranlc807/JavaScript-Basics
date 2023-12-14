let n=1
let Promies = new Promise(function(resolve,reject){
    if(n%2==0)
        resolve("Promies Resolved")
    else
        reject("Promise Rejected")
})

Promies.then(function(res){
    console.log(res)
}).catch(function(res){
    console.log(res)
})
