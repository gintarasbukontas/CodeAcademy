// // Uzduotis: Dating Website

const userPhoto = document.querySelector("img");
const userName = document.querySelector("#name");
const userAge = document.querySelector("#age");
const userEmail = document.querySelector("#email");

fetch("https://randomuser.me/api/")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    userPhoto.src = data.results[0].picture.large;
    userName.textContent = `${data.results[0].name.first} ${data.results[0].name.last}`;

    userAge.textContent = `${data.results[0].dob.age} years old`;

    userEmail.textContent = data.results[0].email;
})

// Uzduotis: VIP

async function getPartyGuests(){
    const response = await fetch("https://party-wedding.glitch.me/v1/party");
    // if(response.ok){
        const guests = await response.json();
        (checkGuestStatus(guests, "Kristupas Lapeika"));
    // }
}

async function checkGuestStatus(guests, guestName){
    const guest = guests.find((guest) => {
        return guest.name === guestName;
    });
    if(guest.VIP == true){
        document.querySelector("#vip").textContent = `Guest: ${guest.name} is a VIP`
    } else if(guest.VIP == false){
        document.querySelector("#vip").textContent = `Guest: ${guest.name} is a VIP`
    }
}

getPartyGuests();

// Uzduotis: Vestuves

async function getWeddingGuests(){
    const response = await fetch("https://party-wedding.glitch.me/v1/wedding");
    const guests = await response.json();
    return guests;
}

async function getWeddingGuestList(){
    const guests = await getWeddingGuests();
    console.log(guests);
    const guestsList = guests.map((guest) => {
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        const tdPlusOne = document.createElement("td");
        const tdAttending = document.createElement("td");

        tdName.textContent = guest.name;

        if(guest.plusOne == true){
            tdPlusOne.textContent = "+";
        } else {
            tdPlusOne.textContent = "-";
        }

        if(guest.attending == true){
            tdAttending.textContent = "+";
        } else {
            tdAttending.textContent = "-";
        }

        tr.append(tdName, tdPlusOne, tdAttending)

        return tr;
    })
    document.querySelector("tbody").append(...guestsList);
}

getWeddingGuestList()