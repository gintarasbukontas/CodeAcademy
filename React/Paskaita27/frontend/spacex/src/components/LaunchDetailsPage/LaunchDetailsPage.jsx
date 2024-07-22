import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./LaunchDetailsPage.module.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function LaunchDetailsPage() {
  const [launch, setLaunch] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((response) => {
        setLaunch(response.data);
        console.log(response.data);
      })
      .catch((error) => alert(error.message));
  }, [id]);

  return (
    <div>
      {launch && (
        <div className={styles.card}>
          <img src={launch.links.patch.small} alt="" />
          <h2>{launch.name}</h2>
          <h4>Date: {launch.date_utc.toString().split("T")[0]}</h4>
          <h4>
            Time: {launch.date_utc.toString().split("T")[1].split(".")[0]} UTC
          </h4>
          <p>
            <span style={{ fontWeight: "bold" }}>Launchpad:</span>{" "}
            {launch.launchpad}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Rocket:</span> {launch.rocket}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Details:</span>{" "}
            {launch.details}
          </p>
          <div className={styles.links}>
            <a href={launch.links.article}>Article</a>
            <a href={launch.links.wikipedia}>Wikipedia</a>
            <a href={launch.links.webcast}>Video</a>
          </div>
        </div>
      )}
    </div>
  );
}
