import { useNavigate } from "react-router-dom";
import styles from "./LaunchItem.module.css";

export default function LaunchItem({ launchName, date, rocket, id }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/launch/${id}`);
  }

  return (
    <div className={styles.card} onClick={handleClick}>
      <h2>{launchName}</h2>
      <p>
        <span style={{ fontWeight: "bold" }}>Launch date:</span>{" "}
        {date.toString().split("T")[0]}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Rocket:</span> {rocket}
      </p>
    </div>
  );
}
