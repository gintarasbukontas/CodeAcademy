console.log("---------- Uzduotis: Knygos klase ----------");

class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title}, by ${this.author} published in ${this.year}`
    }
}

const book1 = new Book("Book Title", "Author Name", "2023");
console.log(book1.getSummary());
const book2 = new Book("Testas", "Jonas", "1994")
console.log(book2.getSummary());

console.log("---------- Uzduotis: Muzikos studentas ----------");

class MusicStudent{
    constructor(name, instrument, level = "beginner"){
        this.name = name;
        this.instrument = instrument;
        this.level = level;
    }
    practice(){
        if(this.level === "beginner"){
            this.level = "intermediate";
        } else if(this.level === "intermediate"){
            this.level = "advanced"
        }
    }
}
const student = new MusicStudent("Anna", "piano");
console.log(student);
student.practice();
console.log(`${student.name}, ${student.instrument}, ${student.level}`);
student.practice();
console.log(`${student.name}, ${student.instrument}, ${student.level}`);

console.log("---------- Uzduotis: Prekiu krepselis ----------");

class ShoppingCart{
    constructor(){
        this.items = []; // sukuria tuscia masyva
    }

    addItem(item){
        this.items.push(item); // ideda objekta i masyva
    }

    removeItem(itemName){
        this.items = this.items.filter(item => item.name !== itemName) // filtruoja masyva. Palieka tik tas prekes kurių vardas nesutampa su ivestu vardu
    }

    calculateTotal(){
        return this.items.reduce((total, item) => total + item.price, 0); // sutraukia viska i viena skaiciu, prie visos sumos prideda price, o pradeda skaiciuoti nuo 0
    }
}
    
const cart = new ShoppingCart();
console.log(cart);
cart.addItem({ name: "Apple", price: 0.99 });
cart.addItem({ name: "Bread", price: 1.29 });
console.log(cart.calculateTotal());
cart.removeItem("Apple");
console.log(cart.calculateTotal());

console.log("---------- Uzduotis: Kino teatro vietu rezervavimas ----------");

class MovieTheater{
    constructor(rows, seatsPerRow){
        this.rows = rows;
        this.seatsPerRow = seatsPerRow;
        
        this.array2D = [];
        for(let i = 0; i < rows; i++){
            let row = [];
            for(let j = 0; j < seatsPerRow; j++){
                row.push(false)
            }
            this.array2D.push(row)
            
        }
        console.log(this.array2D);
    }

    bookSeat(row, seat){
        if(this.array2D[row][seat] == false){
            this.array2D[row][seat] = true;
        } else if(this.array2D[row][seat] == true){
            console.log("Vieta jau rezervuota");
        }
        }

    cancelBooking(row, seat){
        if(this.array2D[row][seat] == true){
            this.array2D[row][seat] = false;
        } else if(this.array2D[row][seat] == false){
            console.log("Vieta laisva");
        }
    }

    checkAvailability(row, seat){
        if(this.array2D[row][seat] == false){
            return "not taken";
        } else {
            return "taken";
        }
    }
}
const theater = new MovieTheater(5, 5);
// console.log(theater);
console.log(theater.checkAvailability(2, 3));
theater.bookSeat(2, 3);
console.log(theater.checkAvailability(2, 3));
theater.cancelBooking(2, 3);
console.log(theater.checkAvailability(2, 3));

console.log("---------- Uzduotis: Bibliotekos valdymo sistema ----------");

class Book1{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class Library{
    constructor(){
        this.books = [];
    }

    addBook(book){
        this.books.push({book, status: true, userName: ""});
    }

    lendBook(bookTitle, userName){
       const foundBook = this.books.filter((books) => books.status === true).findIndex((books) => books.book.title == bookTitle);
       this.books[foundBook].status = false;
       this.books[foundBook].userName = userName;
    }

    returnBook(bookTitle){
        const foundBook = this.books.filter((books) => books.status === false).findIndex((books) => books.book.title == bookTitle);
       this.books[foundBook].status = true;
       this.books[foundBook].userName = "";
    }

    listAvailableBooks(){
        const foundBook = this.books.filter((books) => books.status === true)
        console.log(foundBook);
    }
}
const library = new Library();
library.addBook(new Book("Book1", "Author1", "2020"));
library.addBook(new Book("Book2", "Author2", "2021"));
library.lendBook("Book1", "User1");
library.listAvailableBooks(); // "Book2 by Author2 published in 2021"
library.returnBook("Book1");
library.listAvailableBooks(); // "Book2 by Author2 published in 2021", "Book1 by Author1 published in 2020"

const array = [1, 2, 3];

const arrayCopy = [...array]
const arrayCopy2 = array;

array.push(5)
arrayCopy.push(6)
arrayCopy2.push(7)
console.log(`array: ${array}`);
console.log(`arrayCopy: ${arrayCopy}`);
console.log(`arrayCopy2: ${arrayCopy2}`);