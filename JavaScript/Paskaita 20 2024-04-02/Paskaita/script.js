// syc / async
// promise
// async/await
// new Error

setTimeout(() => {
    console.log("labas");
}, 2000)

let x = 10;

x += 10;

console.log(x);

const pr = new Promise((resolve, reject) => {
    const user = {
        name: "Vardas",
        age: 20
    }
    // resolve(user);
    reject("rejectinom");
})

// then - gali chaininti, naudojamas resolve atveju
// catch - gali but tik vienas (negalima chainint), rasomas reject atveju kad apdirbti errora
// finally - ivyksta kaip paskutinis dalykas nesvarbu ar resolve ar reject vis tiek finally ivyks (nera privalomas) - negauna informacijos nei is then nei is catch

pr.then((data) => {
    console.log("Resolved", data);
    return "Perduota iš pirmo then"
})
    .then((data) => {
    console.log("then 2", data);
    return "Info is antro then";
})
    .then((data) => {
    console.log("then 3", data);
    return "kazkas";
})
    .catch((err) => {
    console.log("Catch", err);
}).finally(() => {
    console.log("Finally");
});

// async/await (labai daznai naudojama sintakse)

const userInfoPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(new Error("kazkas negerai"))
    }, 2000)
});

userInfoPromise.then((data) => console.log(data)); // paprastas sync

const userInfo = await userInfoPromise; // async/await
console.log(userInfo);

// async/await neveikia be type="module" (vietoj defer)

async function displayUserInfo(){
    try {
        const usrInfo = await userInfoPromise; // await laukia kol resolvins,  tai be await gautu undefined jei nelauktu

        const p = document.createElement("p");
        p.textContent = `${usrInfo.name} ${usrInfo.lastName}`
    
        document.body.append(p)
    } catch {
        console.log("kazkoks erroras ivyko");
    }
    
}
document.querySelector("button").addEventListener("click", displayUserInfo);

// const err = new Error("Negalima gauti userio info");

// throw err;

fetch("https://jsonplaceholder.typicode.com/posts").then((data) => {
    console.log(data);

    return data.json();
}).then((data) => {
    console.log(data);
})