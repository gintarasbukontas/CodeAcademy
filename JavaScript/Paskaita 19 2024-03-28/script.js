const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const card4 = document.querySelector("#card4");
const card5 = document.querySelector("#card5");
const card6 = document.querySelector("#card6");
const card7 = document.querySelector("#card7");
const card8 = document.querySelector("#card8");
const card9 = document.querySelector("#card9");
const card10 = document.querySelector("#card10");
const card1Text = document.querySelector("#card1Text");
const card2Text = document.querySelector("#card2Text");
const card3Text = document.querySelector("#card3Text");
const card4Text = document.querySelector("#card4Text");
const card5Text = document.querySelector("#card5Text");
const card6Text = document.querySelector("#card6Text");
const card7Text = document.querySelector("#card7Text");
const card8Text = document.querySelector("#card8Text");
const card9Text = document.querySelector("#card9Text");
const card10Text = document.querySelector("#card10Text");

let firstClick = "";
let secondClick = "";
let clicked = 0;
let result = 0;

card1.addEventListener("click", (e) => {

    if(card1Text.textContent !== "✅"){
        card1Text.textContent = "🐻";
        clicked++;
    }

    if(firstClick !== "🐻"){
        firstClick = "🐻";
    } else {
        secondClick = "🐻"
    }

    if(firstClick === secondClick && firstClick !== "" && secondClick !== "" && card1Text.textContent == card6Text.textContent){
        card1Text.textContent = "✅";
        card6Text.textContent = "✅";
        firstClick = "";
        secondClick = "";
        clicked = 0;
    }

    checkIfWon();
    delayedFunction(checkClicked, 1000);
})

card2.addEventListener("click", (e) => {

    if(card2Text.textContent !== "✅"){
        card2Text.textContent = "🐼";
        clicked++;
    }

    if(firstClick !== "🐼"){
        firstClick = "🐼";
    } else {
        secondClick = "🐼"
    }

    if(firstClick === secondClick && firstClick !== "" && secondClick !== "" && card2Text.textContent == card10Text.textContent){
        card2Text.textContent = "✅";
        card10Text.textContent = "✅";
        firstClick = "";
        secondClick = "";
        clicked = 0;
    }

    checkIfWon();
    delayedFunction(checkClicked, 1000);
})

card3.addEventListener("click", (e) => {

    if(card3Text.textContent !== "✅"){
        card3Text.textContent = "🐱";
        clicked++;
    }

    if(firstClick !== "🐱"){
        firstClick = "🐱";
    } else {
        secondClick = "🐱"
    }

    if(firstClick === secondClick && firstClick !== "" && secondClick !== "" && card3Text.textContent == card8Text.textContent){
        card3Text.textContent = "✅";
        card8Text.textContent = "✅";
        firstClick = "";
        secondClick = "";
        clicked = 0;
    }

    checkIfWon();
    delayedFunction(checkClicked, 1000);
})

card4.addEventListener("click", (e) => {

    if(card4Text.textContent !== "✅"){
        card4Text.textContent = "🐶";
        clicked++;
    }

    if(firstClick !== "🐶"){
        firstClick = "🐶";
    } else {
        secondClick = "🐶"
    }

    if(firstClick === secondClick && firstClick !== "" && secondClick !== "" && card4Text.textContent == card5Text.textContent){
        card4Text.textContent = "✅";
        card5Text.textContent = "✅";
        firstClick = "";
        secondClick = "";
        clicked = 0;
    }

    checkIfWon();
    delayedFunction(checkClicked, 1000);
})

card5.addEventListener("click", (e) => {

    if(card5Text.textContent !== "✅"){
        card5Text.textContent = "🐶";
        clicked++;
    }

    if(firstClick !== "🐶"){
        firstClick = "🐶";
    } else {
        secondClick = "🐶"
    }

    if(firstClick === secondClick && firstClick !== "" && secondClick !== "" && card4Text.textContent == card5Text.textContent){
        card4Text.textContent = "✅";
        card5Text.textContent = "✅";
        firstClick = "";
        secondClick = "";
        clicked = 0;
    }

    checkIfWon();
    delayedFunction(checkClicked, 1000);
})

card6.addEventListener("click", (e) => {

    if(card6Text.textContent !== "✅"){
        card6Text.textContent = "🐻";
        clicked++;
    }

    if(firstClick !== "🐻"){
        firstClick = "🐻";
    } else {
        secondClick = "🐻"
    }

    if(firstClick === secondClick && firstClick !== "" && secondClick !== "" && card1Text.textContent == card6Text.textContent){
        card1Text.textContent = "✅";
        card6Text.textContent = "✅";
        firstClick = "";
        secondClick = "";
        clicked = 0;
    }

    checkIfWon();
    delayedFunction(checkClicked, 1000);
})

card7.addEventListener("click", (e) => {

    if(card7Text.textContent !== "✅"){
        card7Text.textContent = "🐸";
        clicked++;
    }

    if(firstClick !== "🐸"){
        firstClick = "🐸";
    } else {
        secondClick = "🐸"
    }

    if(firstClick === secondClick && firstClick !== "" && secondClick !== "" && card7Text.textContent == card9Text.textContent){
        card7Text.textContent = "✅";
        card9Text.textContent = "✅";
        firstClick = "";
        secondClick = "";
        clicked = 0;
    }

    checkIfWon();
    delayedFunction(checkClicked, 1000);
})

card8.addEventListener("click", (e) => {

    if(card8Text.textContent !== "✅"){
        card8Text.textContent = "🐱";
        clicked++;
    }

    if(firstClick !== "🐱"){
        firstClick = "🐱";
    } else {
        secondClick = "🐱"
    }

    if(firstClick === secondClick && firstClick !== "" && secondClick !== "" && card3Text.textContent == card8Text.textContent){
        card3Text.textContent = "✅";
        card8Text.textContent = "✅";
        firstClick = "";
        secondClick = "";
        clicked = 0;
    }

    checkIfWon();
    delayedFunction(checkClicked, 1000);
})

card9.addEventListener("click", (e) => {

    if(card9Text.textContent !== "✅"){
        card9Text.textContent = "🐸";
        clicked++;
    }

    if(firstClick !== "🐸"){
        firstClick = "🐸";
    } else {
        secondClick = "🐸"
    }

    if(firstClick === secondClick && firstClick !== "" && secondClick !== "" && card7Text.textContent == card9Text.textContent){
        card7Text.textContent = "✅";
        card9Text.textContent = "✅";
        firstClick = "";
        secondClick = "";
        clicked = 0;
    }

    checkIfWon();
    delayedFunction(checkClicked, 1000);
})

card10.addEventListener("click", (e) => {

    if(card10Text.textContent !== "✅"){
        card10Text.textContent = "🐼";
        clicked++;
    }

    if(firstClick !== "🐼"){
        firstClick = "🐼";
    } else {
        secondClick = "🐼"
    }

    if(firstClick === secondClick && firstClick !== "" && secondClick !== "" && card2Text.textContent == card10Text.textContent){
        card2Text.textContent = "✅";
        card10Text.textContent = "✅";
        firstClick = "";
        secondClick = "";
        clicked = 0;
    }

    checkIfWon();
    delayedFunction(checkClicked, 1000);
})

function checkClicked(){
    if(firstClick !== secondClick && clicked >= 2){
        if(card1Text.textContent !== "✅"){
            card1Text.textContent = "";
        }
        if(card2Text.textContent !== "✅"){
            card2Text.textContent = "";
        }
        if(card3Text.textContent !== "✅"){
            card3Text.textContent = "";
        }
        if(card4Text.textContent !== "✅"){
            card4Text.textContent = "";
        }
        if(card5Text.textContent !== "✅"){
            card5Text.textContent = "";
        }
        if(card6Text.textContent !== "✅"){
            card6Text.textContent = "";
        }
        if(card7Text.textContent !== "✅"){
            card7Text.textContent = "";
        }
        if(card8Text.textContent !== "✅"){
            card8Text.textContent = "";
        }
        if(card9Text.textContent !== "✅"){
            card9Text.textContent = "";
        }
        if(card10Text.textContent !== "✅"){
            card10Text.textContent = "";
        }
        firstClick = "";
        secondClick = "";
        clicked = 0;
    }
}

function delayedFunction(func, delay) {
    setTimeout(func, delay);
  }