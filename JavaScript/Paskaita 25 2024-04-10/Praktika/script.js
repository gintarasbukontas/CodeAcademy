const guessingWordElement = document.querySelector("#guessingWord");
const guessingInput = document.querySelector("#guessingInput");
const buttonSubmit = document.querySelector("#buttonSubmit");
const buttonNewWord = document.querySelector("#buttonNewWord");
const remainingGuessesText = document.querySelector("#remainingGuessesText");
const guessedLettersText = document.querySelector("#guessedLettersText");
const wrongGuessText = document.querySelector("#wrongGuessText");
const guessingForm = document.querySelector("#guessingForm");
const checkIfLetter = document.querySelector("#checkIfLetter");
const checkIfSameLetter = document.querySelector("#checkIfSameLetter");
const alertResult = document.querySelector("#alertResult");

const guessingWords = [
  "placeholder",
  "gintaras",
  "akmuo",
  "medis",
  "vanduo",
  "motociklas",
];
let word = "";
let hiddenWord = "";
let wordArray = [];
let hiddenWordArray = [];
let remainingGuesses = 6;
let guessedLetters = "";

function generateWord() {
  let rng = Math.floor(Math.random() * 5 + 1);
  word = guessingWords[rng].toUpperCase();
  for (let i = 0; i < word.length; i++) {
    hiddenWord = hiddenWord + "_";
    wordArray.push(word[i]);
    hiddenWordArray.push("_");
  }
  guessingWordElement.textContent = [...hiddenWordArray]
    .toString()
    .replace(/,/g, " ");
}
generateWord();
console.log(wordArray);
console.log(hiddenWordArray);
console.log(...hiddenWordArray);

function guessLetter() {
  if (!guessedLetters.includes(guessingInput.value)) {
    checkIfSameLetter.style.display = "none";
    let correct = false;
    for (let i = 0; i < word.length; i++) {
      if (guessingInput.value.toUpperCase() === word[i]) {
        correct = true;
        hiddenWordArray[i] = guessingInput.value.toUpperCase();
        guessingWordElement.textContent = [...hiddenWordArray]
          .toString()
          .replace(/,/g, " ");
        wrongGuessText.style.display = "none";
      }
    }
    if (correct === false) {
      remainingGuesses = remainingGuesses - 1;
      document.querySelector("img").src =
        "images/" + remainingGuesses.toString() + ".jpg";
      wrongGuessText.style.display = "block";
      remainingGuessesText.textContent = `Likę spėjimai: ${remainingGuesses}`;
      setTimeout(checkIfLost, 1000);
    }
    guessedLetters = guessedLetters + " " + guessingInput.value;
    guessedLettersText.textContent = guessedLetters.toUpperCase();
    resetInput();
  } else {
    checkIfSameLetter.style.display = "block";
    resetInput();
  }
  setTimeout(checkIfWon, 2000);
}

function resetInput() {
  guessingInput.value = "";
  buttonSubmit.disabled = true;
}

function checkIfWon() {
  if (!hiddenWordArray.includes("_")) {
    customAlert("Laimėjote");
  }
}

function checkIfLost() {
  if (remainingGuesses == 0) {
    customAlert("Pralaimėjote");
  }
}

guessingInput.addEventListener("keypress", (e) => {
  const keyPressed = e.key;
  checkInputIfLetter(keyPressed);
});

function checkInputIfLetter(letter) {
  const lettersOnlyRegex = /^[a-zA-Z]$/;
  if (!letter.match(lettersOnlyRegex)) {
    buttonSubmit.disabled = true;
    checkIfLetter.style.display = "block";
  } else {
    buttonSubmit.disabled = false;
    checkIfLetter.style.display = "none";
  }
}

buttonSubmit.addEventListener("click", guessLetter);

guessingForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

buttonNewWord.addEventListener("click", () => {
  location.reload(true);
});

remainingGuessesText.textContent = `Likę spėjimai: ${remainingGuesses}`;

function customAlert(result) {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  alertResult.textContent = result;

  var modalOK = document.getElementById("modalOK");
  modalOK.onclick = function () {
    modal.style.display = "none";
    location.reload(true);
  };
}
