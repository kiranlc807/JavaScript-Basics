//class creation.
class Car{
    constructor(name,year){
        this.name=name
        this.year=year
    }
}

const Car1 = new Car("Toyoto Fortuner",2018) // invoking constructor()
const Car2 = new Car("Ford Endeavour",2020)
console.log(Car1);
console.log(Car2);
console.log(Car1.name); // Access the individual Object Properties.
console.log(Car2.name); // "Ford Endeavour"