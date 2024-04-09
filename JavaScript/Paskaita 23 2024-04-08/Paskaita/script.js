const postsUrl = "https://jsonplaceholder.typicode.com/posts/1";

const button = document.querySelector("button");

async function postData(){
    const response = await fetch(postsUrl, {
        method: "PUT", // POST nusiust nauja irasa , PUT atnaujint esama irasa
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Title",
            body: "Body",
            userId: 20
        })
    })
    const data = await response.json();

    console.log(data);
}

button.addEventListener("click", postData)

const h1 = document.querySelector("h1");

h1.addEventListener("dblclick", () => console.log("double clicked"))

h1.addEventListener("mousedown", (event) => {
    event.target.style.fontSize = "50px";
})

h1.addEventListener("mouseup", (event) => {
    event.target.style.fontSize = "30px";
})

document.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        console.log("Enter clicked");
    }
})

const input = document.querySelector("input");

input.addEventListener("keydown", (e) => {
e.stopPropagation() // padaro kad  eventas neitu per visus tevinius elementus

    if(e.key === "Enter"){
        console.log(e.target.value);
    }
})

input.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        e.target.value = "";
    }
})