import { useState } from "react";

export default function RandomFood() {
  const foods = ["🍏", "🍎", "🍐", "🍊", "🍋", "🍉", "🍈", "🍇", "🥥", "🥝"];

  const [food, setFood] = useState("🍏");

  function randomFood() {
    const randomFood = foods[Math.floor(Math.random() * foods.length)];
    setFood(randomFood);
  }

  return (
    <div>
      <div onClick={randomFood}>
        <h1>{food}</h1>
      </div>
    </div>
  );
}
