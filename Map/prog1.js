let map = new Map()
map.set("Kirana","Chitadurga")
map.set("Yashwanth","Ballari")
map.set("Arun","Bangalore")
map.set("Arnab","Pune")

map.forEach((v,k)=> console.log(k," : ",v))

console.log(map.has("Arun")) // check key present or not 

console.log(map.size) // number of entries.

let it = map.keys()

for(let i of it){
    console.log(i);
}
