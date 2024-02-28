// Uzduotis Maziausia salis

// const enterCountry = prompt("Iveskite sali");

// if (enterCountry == "Vatikanas" || enterCountry == "vatikanas"){
//     alert("Teisingai")
// } else {
//     alert("Rimtai? Taigi Vatikanas")
// }



// Uzduotis if i ?

// let result;

// 1 + 2 < 4 ? result = "Below" : result = "Over";

// alert(result);



// Uzduotis if else i ?

// let message = (login == 'Employee') ? 'Hello' :
// (login == 'Director') ? 'Greetings' : 
// (login == '') ? 'No login' : '';



// Uzduotis Pilnameciai

// const legalAge = 20;
// const clientAge = +prompt("Iveskite amziu");

// if (clientAge >= legalAge){
//     console.log("Pasiekęs", legalAge);
// } else {
//     console.log("Nepasiekęs", legalAge);
// }



// Uzduotis Ilgas vardas

// const name = prompt("Iveskite varda");

// if(name.length > 6){
//     console.log("Ilgas vardas");
// }



// Uzduotis Ar didesnis

// const age = prompt("Enter age");

// if (age > 100 || age < 0){
//     console.log("Invalid age");
// } else if (age >= 1 && age < 18){
//     console.log("Child");
// } else {
//     console.log("Adult");
// }



// Uzduotis Automobiliai

// const car = prompt("Enter car brand");

// if (car === "VW" || car === "Audi" || car === "Bentley" || car === "Bugatti" || car === "Lamborghini" || car === "Porsche") {
//     console.log("Priklauso VW group");
// } else if (car === "BMW" || car === "Mini" || car === "Rolls-Royce") {
//     console.log("Priklauso BMW group");
// } else {
//     console.log("Nepriklauso nei VW group, nei BMW group");
// }



// Uzduotis Short or Long

// const name = "Gintaras";

// (name.length < 5) ? console.log("Short name") : console.log("Long name");



// Uzduotis Ar galima vairuoti?

// const clientAge = +prompt("Enter age");
// const legalAge = 18;

// console.log(clientAge >= legalAge ? "Can drive" : "Can't drive");



// Uzduotis -1 amzius

// const clientAge = +prompt("Enter age");
// const legalAge = 18;

// console.log(
//     (clientAge <= 0 || clientAge > 120) ? "Invalid age" :
//     clientAge >= legalAge ? "Can drive" : "Can't drive"
//     );



// Uzduotis Phone

// const phone = "iPhone";
// let isIphoneUser;
// isIphoneUser = (phone === "iPhone" ? true : false);
// console.log(isIphoneUser ? "iPhone user" : "Not an iPhone user"); 

// Sunku suprast pacia uzduoti ko is manes nori...

// const phone = 'iPhone';
// const isIphoneUser = phone === 'iPhone';
// console.log(isIphoneUser);



//  Uzduotis Patikrinkite diapazona

// const age = prompt("Enter age");

// if (age >= 14 && age <= 90){
//     console.log("Amzius yra tarp 14 ir 90");
// } else {
//     console.log("Amzius nera tarp 14 ir 90");
// }



// Uzduotis switch i if

// let browser = prompt("Enter browser name")

// if (browser === "Edge")
// {
//     alert("RIP Edge!");
// } else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera"){
//     alert("Sios narsykles palaikomos");
// } else {
//     alert("Tikimes, kad sis puslapis atrodys puikiai!");
// }



// Uzduotis if i switch

// let a = +prompt('a?', "");

// switch(a){
//     case 0 : alert( 0 );
//     break;

//     case 1 : alert( 1 );
//     break;

//     case 2 : 
//     case 3 :
//         alert( "2,3" );
//     break;
// }



// Uzduotis Automobiliai

// let car = prompt("Enter car brand");

// switch(car){
//     case "VW" :
//     case "Audi" :
//     case "Bentley" :
//     case "Bugatti" :
//     case "Lamborghini" :
//     case "Porsche" :
//     alert("VW Group");
//     break;

//     case "BMW" :
//     case "Mini" :
//     case "Rolls-Royce" :
//     alert("BMW Group");
//     break;

//     default :
//     alert("Nepriklauso nei VW Group, nei BMW Group");
//     break;
// }



// Uzduotis Vaisius ar darzove

// let userInput = "Morka";

// switch(userInput){
//     case "Obuolys" :
//     case "Kriause" :
//     case "Apelsinas" :
//     case "Citrina" :
//     case "Kivis" :
//     console.log("Vaisius");
//     break;

//     case "Bulve" :
//     case "Kopustas" :
//     case "Agurkas" :
//     case "Morka" :
//     case "Ridikas" :
//     console.log("Darzove");
//     break;
// }



// Uzduotis Kokia siandien diena

// let weekDay = 5;

// switch(weekDay){
//     case 0 :
//     weekDay = "Pirmadienis";
//     break;

//     case 1 :
//     weekDay = "Antradienis";
//     break;

//     case 2 :
//     weekDay = "Treciadienis";
//     break;

//     case 3 :
//     weekDay = "Ketvirtadienis";
//     break;

//     case 4 :
//     weekDay = "Penktadienis";
//     break;

//     case 5 :
//     weekDay = "Sestadienis";
//     break;

//     case 6 :
//     weekDay = "Sekmadienis";
//     break;
// }

// console.log(weekDay);