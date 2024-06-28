import styles from "./Header.module.css";

import { useSettingsContext } from "../Context/SettingsContextProdiver";

export default function Header() {
  const { dark, setDark } = useSettingsContext();

  function handleDarkMode() {
    if (dark === "dark") {
      setDark("light");
    }
    if (dark === "light") {
      setDark("dark");
    }
  }

  return (
    <div className={styles.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
        alt=""
      />
      <button onClick={handleDarkMode}>Toggle Theme</button>
    </div>
  );
}
