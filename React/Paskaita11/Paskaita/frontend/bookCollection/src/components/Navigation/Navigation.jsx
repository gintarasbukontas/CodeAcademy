import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <Link to={"/"}>Home</Link>
      <Link to={"/books"}>Books</Link>
      <Link to={"/add-book"}>Add Book</Link>
    </div>
  );
}
