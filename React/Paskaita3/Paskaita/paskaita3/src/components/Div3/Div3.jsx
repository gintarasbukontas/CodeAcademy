import { useState } from "react";

export default function Div3() {
  const [getLetter, setLetter] = useState("A");

  function generateRandomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * letters.length);

    setLetter(letters[randomIndex]);
  }

  return (
    <div>
      <h1>{getLetter}</h1>
      <button onClick={generateRandomLetter}>Generate random letter</button>
    </div>
  );
}
