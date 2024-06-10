import styles from "./Div2.module.css";
import { useState } from "react";

export default function Div2() {
  const [getColor, setColor] = useState("white");

  return (
    <div>
      <div className={styles.box} style={{ backgroundColor: getColor }}></div>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
}
