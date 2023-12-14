const ar = [3,7,4,2,8,5,1]

function prime(n){
    for(let i=2;i<=n/2;i++){
        if(n%i==0)
            return false
    }
    return true;
}

const res = square(ar,prime)

function square(ar,logic){
    const rs = []
    for(const i of ar){
        if(logic(i))
            rs.push(i)
    }
    return rs
}

console.log(res)