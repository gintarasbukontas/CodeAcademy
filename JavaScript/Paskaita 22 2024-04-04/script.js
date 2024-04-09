async function getProperties(){
    const response = await fetch("https://robust-safe-crafter.glitch.me/");
        const properties = await response.json();
        return properties;
}

async function listProperties(){
    const properties = await getProperties();
    // console.log(properties);
    const cardsDiv = document.querySelector("#cardsDiv");

    const cards = properties.forEach((card) => {
        // const div = document.createElement("div");
        // div.classList.add("card", card.city.toLowerCase());

        // const cardImage = document.createElement("img");
        // div.append(cardImage);
        // cardImage.src = card.image;

        // const cardPrice = document.createElement("h2");
        // div.append(cardPrice);
        // cardPrice.textContent = `€${card.price / 1000},000`;

        // const cardCity = document.createElement("p");
        // div.append(cardCity);
        // cardCity.textContent = card.city;

        // const cardDescription = document.createElement("p");
        // div.append(cardDescription);
        // cardDescription.textContent = card.description;

        // return div;
        createCard(card);
    })
}
listProperties();

async function filterProperties(){
    const properties = await getProperties();
    // console.log(properties);
    const cardsDiv = document.querySelector("#cardsDiv");

    cardsDiv.innerHTML = '';

    if(this.classList.contains("clicked")){
        this.classList.remove("clicked");
        listProperties();
    } else {
        const cards = properties.forEach((card) => {
            if(card.city == this.textContent){
            // const div = document.createElement("div");
            // cardsDiv.append(div);
            // div.classList.add("card", card.city.toLowerCase());
    
            // const cardImage = document.createElement("img");
            // div.append(cardImage);
            // cardImage.src = card.image;
    
            // const cardPrice = document.createElement("h2");
            // div.append(cardPrice);
            // cardPrice.textContent = `€${card.price / 1000},000`;
    
            // const cardCity = document.createElement("p");
            // div.append(cardCity);
            // cardCity.textContent = card.city;
    
            // const cardDescription = document.createElement("p");
            // div.append(cardDescription);
            // cardDescription.textContent = card.description;
            createCard(card);
            
            if(document.querySelector(".clicked")){
                document.querySelector(".clicked").classList.remove("clicked");
            }
            
            this.classList.add("clicked");
        }
        })
    }
}

const filterButtons = document.getElementsByClassName("filterButton");

for(let i = 0; i < filterButtons.length; i++){
    filterButtons[i].addEventListener("click", filterProperties);
}

async function createCard(card){
    const div = document.createElement("div");
            cardsDiv.append(div);
            div.classList.add("card", card.city.toLowerCase());
    
            const cardImage = document.createElement("img");
            div.append(cardImage);
            cardImage.src = card.image;
    
            const cardPrice = document.createElement("h2");
            div.append(cardPrice);
            cardPrice.textContent = `€${card.price / 1000},000`;
    
            const cardCity = document.createElement("p");
            div.append(cardCity);
            cardCity.textContent = card.city;
    
            const cardDescription = document.createElement("p");
            div.append(cardDescription);
            cardDescription.textContent = card.description;
}