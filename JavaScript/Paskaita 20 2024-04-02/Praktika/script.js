const task1 = new Promise((resolve, reject) => {
    let random = Math.floor(Math.random() * 5) + 1;

    if(random > 1){
        setTimeout(() => resolve(), 1000)
    } else {
        setTimeout(() => reject(), 1000)
    }
})

task1
.then(() => {
    return "This is a message";
})
.then((data) => {
    alert(data);
})
.catch(() => console.log("rejected"));

