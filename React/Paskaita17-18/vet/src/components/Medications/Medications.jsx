import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Medications.module.css";
import { useNavigate } from "react-router-dom";

const API_LINK = "https://glittery-dull-snickerdoodle.glitch.me";

export default function Medications() {
  const [medications, setMedications] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_LINK}/v1/meds`)
      .then((response) => setMedications(response.data))
      .catch((error) => alert(error.message));
  }, []);

  function handleAddMedicationButton() {
    navigate("/add-medication");
  }

  return (
    <div>
      <div className={styles.flex}>
        <h1>Medication List</h1>
        <button className="button-orange" onClick={handleAddMedicationButton}>
          ADD MEDICATION
        </button>
      </div>
      <div className={styles.grid}>
        {medications.map((medication) => (
          <div key={medication.id} className={styles.card}>
            <h2>{medication.name}</h2>
            <p>{medication.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
