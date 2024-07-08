import axios from "axios";
import styles from "./ViewLog.module.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_LINK = "https://glittery-dull-snickerdoodle.glitch.me";

export default function ViewLog() {
  const [logs, setLogs] = useState([]);
  const [petName, setPetName] = useState("");
  const [logsFilter, setLogsFilter] = useState("✔");
  const [prescriptionsFilter, setPrescriptionsFilter] = useState("✔");
  const [logsFilterButtonClass, setLogsFilterButtonClass] =
    useState("button-orange2");
  const [prescriptionsFilterButtonClass, setPrescriptionsFilterButtonClass] =
    useState("button-orange2");
  const [showLogs, setShowLogs] = useState(true);
  // const [showPrescriptions, setShowPrescriptions] = useState(true);

  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (showLogs) {
      axios
        .get(`${API_LINK}/v1/logs/${params.id}`)
        .then((response) => {
          setLogs(response.data);
          console.log(response.data[0]);
          setPetName(response.data[0].name);
        })
        .catch((error) => alert(error.message));
    } else {
      setLogs([]);
    }
  }, [params.id, showLogs]);

  function handleAddLogButton() {
    navigate("/add-log");
  }

  function handleAddPrescriptionButton() {
    navigate("/add-prescription");
  }

  function handleLogsFilterButton() {
    if (logsFilter === "✔") {
      setLogsFilter("X");
      setLogsFilterButtonClass("button-white2");
      setShowLogs(false);
    } else {
      setLogsFilter("✔");
      setLogsFilterButtonClass("button-orange2");
      setShowLogs(true);
    }
  }

  function handlePrescriptionsFilterButton() {
    if (prescriptionsFilter === "✔") {
      setPrescriptionsFilter("X");
      setPrescriptionsFilterButtonClass("button-white2");
    } else {
      setPrescriptionsFilter("✔");
      setPrescriptionsFilterButtonClass("button-orange2");
    }
  }

  return (
    <div>
      <div>
        <div className={styles.flex}>
          <h1>{petName}: Health Records</h1>
          <div className={styles.flex2}>
            <button
              className="button-white"
              onClick={handleAddPrescriptionButton}
            >
              ADD PRESCRIPTION
            </button>
            <button className="button-orange" onClick={handleAddLogButton}>
              ADD LOG
            </button>
          </div>
        </div>
      </div>
      <div className={styles.flex2}>
        <p>Display:</p>
        <button
          className={logsFilterButtonClass}
          onClick={handleLogsFilterButton}
        >
          Logs {logsFilter}
        </button>
        <button
          className={prescriptionsFilterButtonClass}
          onClick={handlePrescriptionsFilterButton}
        >
          Prescriptions {prescriptionsFilter}
        </button>
      </div>
      <div className={styles.grid}>
        {logs.map((log, y) => (
          <div key={y} className={styles.card}>
            <h2>{log.name}</h2>
            <p>{log.description}</p>
            <p>{log.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
