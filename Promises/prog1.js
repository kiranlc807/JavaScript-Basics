
let p = new Promise(function(resolve,reject){   //created Promise Object 
    let a = -10
    if(a>=0)      // based on condition calling the callback Fuction 
        resolve("Promies resolved")
    else
        reject("Promies Rejected")
});

p.then(function(x){
    console.log(x)
}).catch(function(x){
    console.log(x)
})
