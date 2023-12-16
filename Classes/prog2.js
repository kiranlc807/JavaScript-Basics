class Car{
    constructor(name,year){
        this.name=name
        this.year=year
    }

    cAge(){
        const date = new Date();
        return date.getFullYear()-this.year
    }
}

const Car1 = new Car("Toyoto Fortuner",2018) // invoking constructor()
const Car2 = new Car("Ford Endeavour",2020)

let Car1_age = Car1.cAge()
let Car2_age = Car2.cAge()

console.log(Car1.name," age is ",Car1_age," years");
console.log(Car2.name," age is ",Car2_age," years");