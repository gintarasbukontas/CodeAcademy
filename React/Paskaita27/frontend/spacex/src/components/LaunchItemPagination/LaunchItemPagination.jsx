import axios from "axios";
import { useEffect, useState } from "react";
import LaunchItem from "../LaunchItem/LaunchItem";

const API_URL = import.meta.env.VITE_API_URL;

export default function LaunchItemPagination() {
  const [launches, setLaunches] = useState([]);
  const [amount, setAmount] = useState(10);
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => {
        const newPage = prevPage + 1;
        setSkip((newPage - 1) * amount);
        return newPage;
      });
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => {
        const newPage = prevPage - 1;
        setSkip((newPage - 1) * amount);
        return newPage;
      });
    }
  };

  useEffect(() => {
    console.log(page);
    console.log(skip);
    const postData = async () => {
      try {
        const body = {
          options: {
            limit: amount,
            offset: skip,
          },
        };
        const response = await axios.post(`${API_URL}/query`, body);
        console.log(response.data.docs);
        setLaunches(response.data.docs);
        setTotalPages(Math.ceil(response.data.totalDocs / amount));
      } catch (error) {
        alert(error.message);
        console.log(error.message);
      }
    };

    postData();
  }, [page, amount, skip]);

  return (
    <div>
      <h1>Launch List Pagination</h1>
      <label htmlFor="launchesQuantity">Launches Per Page: </label>
      <select
        name="launchesQuantity"
        id="launchesQuantity"
        onChange={(e) => setAmount(e.target.value)}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>

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
      <p>Page {page}</p>
      <button onClick={handlePreviousPage} disabled={page === 1}>
        Previous Page
      </button>
      <button onClick={handleNextPage} disabled={page === totalPages}>
        Next Page
      </button>
    </div>
  );
}
