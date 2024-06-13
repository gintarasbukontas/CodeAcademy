import { useState } from "react";

export default function RandomAnimal() {
  const animals = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐻‍❄️", "🐨"];

  const [animal, setAnimal] = useState("🐶");

  function randomAnimal() {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    setAnimal(randomAnimal);
  }

  return (
    <div>
      <div onClick={randomAnimal}>
        <h1>{animal}</h1>
      </div>
    </div>
  );
}
