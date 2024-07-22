import axios from "axios";
import { useEffect, useState } from "react";
import LaunchItem from "../LaunchItem/LaunchItem";

const API_URL = import.meta.env.VITE_API_URL;

export default function LaunchListPage() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setLaunches(response.data);
        console.log(response.data);
      })
      .catch((error) => alert(error.message));
  }, []);

  return (
    <div>
      <h1>Launch List</h1>
      <div>
        {launches.map((launch) => (
          <div key={launch.id}>
            <LaunchItem
              launchName={launch.name}
              date={launch.date_utc}
              rocket={launch.rocket}
              id={launch.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
