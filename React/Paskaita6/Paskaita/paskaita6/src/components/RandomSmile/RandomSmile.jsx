import { useState } from "react";

export default function RandomSmile() {
  const smiles = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "🥲", "🥹"];

  const [smile, setSmile] = useState("😀");

  function randomSmile() {
    const randomSmiley = smiles[Math.floor(Math.random() * smiles.length)];
    setSmile(randomSmiley);
  }

  return (
    <div>
      <div onClick={randomSmile}>
        <h1>{smile}</h1>
      </div>
    </div>
  );
}
