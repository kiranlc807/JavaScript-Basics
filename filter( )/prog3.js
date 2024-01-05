let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 44, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 39, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'programmer' },
]

let res = users.filter(function(obj){ //filter based an age.
    if(obj.age>=44)
        return true
})

console.log("Old Users",users);

console.log("filtered users", res);