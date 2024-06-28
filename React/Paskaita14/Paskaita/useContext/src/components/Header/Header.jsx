import styles from "./Header.module.css";

import { useSettingsContext } from "../Context/SettingsContextProvider";

export default function Header() {
  const { setShow } = useSettingsContext();

  function handleChange(e) {
    setShow(e.target.value);
  }

  return (
    <div className={styles.header}>
      <img
        src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1719446400&semt=sph"
        alt=""
      />
      <select onChange={handleChange}>
        <option value="show">Show</option>
        <option value="no">Dont Show</option>
      </select>
    </div>
  );
}
