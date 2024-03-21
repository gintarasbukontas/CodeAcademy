console.log("---------- Uzduotis: Automobilis ----------");

class Car{
    constructor(brand, model, engine, basePrice){
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.basePrice = basePrice;
    }

    turnOn(){
        console.log("vrooom");
    }

    getPrice(){
        if(this.engine === "electric"){
            this.basePrice += 10000;
            console.log("Price:", this.basePrice);
        } else if(this.engine === "diesel"){
            this.basePrice += 5000;
            console.log("Price:", this.basePrice);
        } else if(this.engine === "petrol"){
            console.log("Price:", this.basePrice);
        } else {
            console.log("Wrong engine type");
        }
    }
}

const bmw = new Car("BMW", "X5", "petrol");
const skoda = new Car("Skoda", "Superb", "diesel")

console.log(bmw);
console.log(skoda);
bmw.turnOn();
skoda.turnOn();

console.log("---------- Uzduotis: Automobilio kaina ----------");

const opel = new Car("Opel", "Vectra", "petrol", 2000);
console.log(opel);
opel.getPrice();

console.log("---------- Uzduotis: Banko saskaitos klase ----------");

class BankAccount{
    constructor(ownerName, balance = 0){
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount){
        return this.balance += amount;
    }

    withdraw(amount){
        return this.balance -= amount;
    }
}

const account = new BankAccount("Jonas");
account.deposit(100);
account.withdraw(30);
console.log(account.balance);

console.log("---------- Uzduotis: Transporto priemoniu paveldejimas ----------");

class Vehicle{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    information(){
        if(this.engineType !== undefined){
        return `Brand: ${this.brand}, Model: ${this.model}, Engine Type: ${this.engineType}`
        }

        if(this.hasEngine !== undefined){
        return `Brand: ${this.brand}, Model: ${this.model}, Engine Type: ${this.hasEngine}`
        }
    }
    
}

class Car2 extends Vehicle{
    constructor(brand, model, engineType){
        super(brand, model);
        this.engineType = engineType;
    }
}

class Bicycle extends Vehicle{
    constructor(brand, model, hasEngine){
        super(brand, model);
        this.hasEngine = hasEngine;
    }
}
const car = new Car2("Toyota", "Corolla", "Petrol");
console.log(car.information());

const bicycle = new Bicycle("Trek", "Marlin", true);
console.log(bicycle.information());

const audi = new Car2("Audi", "A3", "Diesel");
console.log(audi.information());