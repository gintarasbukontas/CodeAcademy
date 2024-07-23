import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div className={styles.flex}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/SpaceX_logo_black.svg/1280px-SpaceX_logo_black.svg.png"
          alt="logo"
        />
        <div>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/launches")}>Launch List</button>
          <button onClick={() => navigate("/launchesPagination")}>
            Launch List Pagination
          </button>
        </div>
      </div>
    </div>
  );
}
