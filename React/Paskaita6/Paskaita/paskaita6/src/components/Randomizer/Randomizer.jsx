import { useState } from "react";

export default function Randomizer(props) {
  const foods = ["🍏", "🍎", "🍐", "🍊", "🍋", "🍉", "🍈", "🍇", "🥥", "🥝"];
  const smiles = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "🥲", "🥹"];
  const animals = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐻‍❄️", "🐨"];

  const [food, setFood] = useState("🍏");
  const [smile, setSmile] = useState("😀");
  const [animal, setAnimal] = useState("🐶");

  function random() {
    if (props.emoji === "foods") {
      const randomFood = foods[Math.floor(Math.random() * foods.length)];
      setFood(randomFood);
    }

    if (props.emoji === "animals") {
      const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
      setAnimal(randomAnimal);
    }

    if (props.emoji === "smiles") {
      const randomSmiley = smiles[Math.floor(Math.random() * smiles.length)];
      setSmile(randomSmiley);
    }
  }

  return (
    <div className="flex">
      <div onClick={random}>
        {props.emoji === "foods" && <h1>{food}</h1>}
        {props.emoji === "smiles" && <h1>{smile}</h1>}
        {props.emoji === "animals" && <h1>{animal}</h1>}
      </div>
    </div>
  );
}
