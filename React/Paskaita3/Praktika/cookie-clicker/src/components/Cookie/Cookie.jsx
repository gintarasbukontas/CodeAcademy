import { useState } from "react";
import styles from "./Cookie.module.css";

export default function Cookie() {
  const [cookie, setCookie] = useState(
    "https://www.freeiconspng.com/uploads/download-biscuit-cookie-monster-clipart-24.png"
  );

  let [points, setPoints] = useState(0);
  let [clicks, setClicks] = useState(1);
  let [getBgColor, setBgColor] = useState("dark-gray");

  function upgradeCookie() {
    if (points >= 50) {
      setPoints(points - 50);
      setCookie(
        "https://www.freepnglogos.com/uploads/cookie-png/cookie-clipart-cookieclipart-cake-clip-art-photo-36.png"
      );
    }
  }

  function getPoints() {
    setPoints(points + clicks);
  }

  function setClicksAmount() {
    if (points >= 50) {
      setPoints(points - 50);
      setClicks(2);
    }
  }

  function setClicksAmountTwo() {
    if (points >= 100) {
      setPoints(points - 100);
      setClicks(3);
    }
  }

  function upgradeBackground() {
    if (points >= 75) {
      setPoints(points - 75);
      setBgColor("blue");
    }
  }

  return (
    <div className={styles.grid}>
      <div style={{ backgroundColor: getBgColor }}>
        <img src={cookie} alt="" onClick={getPoints} />
        <h1>Points: {points}</h1>
      </div>
      <div>
        <button onClick={setClicksAmount}>
          Upgrade Clicks to 2 per click | 50 points
        </button>

        <button onClick={setClicksAmountTwo}>
          Upgrade Clicks to 3 per click | 100 points
        </button>

        <button onClick={upgradeCookie}>Upgrade Cookie | 50 points</button>

        <button onClick={upgradeBackground}>
          Upgrade Background | 75 points
        </button>
      </div>
    </div>
  );
}
