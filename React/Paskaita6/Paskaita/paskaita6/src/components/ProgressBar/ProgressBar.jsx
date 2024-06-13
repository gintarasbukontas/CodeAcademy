import { useState } from "react";
// import styles from "./ProgressBar.module.css";

export default function ProgressBar() {
  const [percent, setPercent] = useState(0);

  function updateProgress(e) {
    if (e.target.innerHTML === "Plus") {
      setPercent(percent + 20);
    }
    if (e.target.innerHTML === "Minus") {
      setPercent(percent - 20);

      if (percent > 300) {
        setPercent(300);
      }

      if (percent < 0) {
        setPercent(0);
      }
    }
  }

  return (
    <div>
      <div
        style={{
          width: 300,
          height: 50,
          backgroundColor: "black",
          borderRadius: 5,
          border: "1px solid white",
        }}
      >
        <div
          style={{
            width: percent,
            maxWidth: 300,
            height: 50,
            backgroundColor: "red",
            borderRadius: 5,
          }}
        ></div>
      </div>
      <br />
      <button onClick={updateProgress}>Plus</button>
      <button onClick={updateProgress}>Minus</button>
    </div>
  );
}
