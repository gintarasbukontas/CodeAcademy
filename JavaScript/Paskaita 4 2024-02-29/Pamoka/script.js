// // // 1. i = 0, 0 < 5, 0 + 1
// // // 2. i = 1, 1 < 5, 1 + 1
// // // 3. i = 2, 2 < 5, 2 + 1
// // // 4. i = 3, 3 < 5, 3 + 1
// // // 5. i = 4, 4 < 5, 4 + 1
// // // 6. i = 5, 5 < 5 false, tai nebevykdo 5 + 1

// // // 1 veiksmas - sukuria i kintamaji
// // // 2 veiksmas - patikrina salyga ar i maziau nei 5
// // // 3 veiksmas - jei salyga teisinga ivykdo koda
// // // 4 veiksmas - pakeiciamas i kintamasis
// // // 5 veiksmas - kartojasi zingsniai 2-3-4 visa laika kol salyga = true

// // for (let i = 0; i < 5; i++) {
// //     console.log(i);
// // }

// // for (let i = 100; i >= 10; i -= 10) {
// //     console.log(i);
// // }

// // let j = 0;
// // while (j < 5) {
// //     j++;
// //     console.log(j, "while");
// // }

// // let k = 0;

// // do {
// //     k++
// //     console.log(k, "do while");
// // } while (k < 5);

// // Print Numbers: Write a loop that prints numbers from 1 to 10.

// for (i = 1; i <= 10; i++) {
//     console.log(i);
// }

// // Even Numbers: Write a loop that prints even numbers from 2 to 20.

// for (i = 2; i <= 20; i += 2) {
//     console.log(i);
// }

// Sum of Numbers: Write a loop that calculates the sum of numbers from 1 to 10.

// let sum = 0;

// for (let i = 1; i <= 10; i++){
//     sum += i;
// }

// console.log(sum);

// console.log(userInput[0]);
// console.log(userInput.length);

let isUserInputValid = false;

do {
    const userInput = prompt("Iveskit koki zodi");

    if (userInput) {
        isUserInputValid = true;
        let reversedString = "";
    
        for (let i = userInput.length -1; i >= 0; i--) {
            reversedString += userInput[i];
        }
        
        console.log(reversedString);
    } else {
        alert("Iveskite zodi");
    }
} while(!isUserInputValid);

