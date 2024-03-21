
class Car { // sukuriame klase. Klases pavadinimas privalo but is didziosios raides
    #drowned = false; // # padaro kintamaji private - nepasiekiamas is isores, tai console loginant gaunam undefined

    constructor(year, type){ // visos klases turi tureti constructor()
        this.year = year;
        this.type = type;
    }

    getDrowned(){
        return this.#drowned;
    }

    setDrowned(newValue){
        if(typeof newValue !== "boolean"){
            console.log("Negera reiksme");
        } else {
            this.#drowned = newValue;
        }
    }

    getDescription(){ // klases viduje esanti funkcija vadinasi metodas ir nereikia pradzioje rasyti function
        console.log(`Year: ${this.year}, Type: ${this.type}, Drowned: ${this.drowned}`);
    }
}

const bmw = new Car(2000, "Universal"); // new pagalba sukuriama nauja objekta
const vw = new Car(2010, "Tipas")

console.log(bmw);

console.log(bmw.drowned);

bmw.setDrowned(true);

console.log(bmw.getDrowned()); // funkcija getDrowned padeda prieiti prie privataus kintamojo

bmw.getDescription();
vw.getDescription();

class Shape{
    constructor(color){
        this.color = color;
    }

    getColor(){
        return this.color;
    }
}

class Triangle extends Shape{
    constructor(color, size){
        super(color)
        this.size = size;
    }

    getSize(){
        return this.size;
    }
}

const tr = new Triangle("red", 20);

console.log(tr.getColor());
console.log(tr.getSize());