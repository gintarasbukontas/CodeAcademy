import axios from "axios";
import { useEffect, useState } from "react";
import LaunchItem from "../LaunchItem/LaunchItem";
import DateFilter from "../DateFilter/DateFilter";
import styles from "./LaunchItemPagination.module.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function LaunchItemPagination() {
  const [launches, setLaunches] = useState([]);
  const [amount, setAmount] = useState(10);
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [documents, setDocuments] = useState(0);

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
        let docs = response.data.docs;

        if (search) {
          docs = docs.filter((doc) =>
            doc.name.toLowerCase().includes(search.toLowerCase())
          );
        }

        if (startDate && endDate) {
          const start = new Date(startDate).toISOString();
          const end = new Date(endDate).toISOString();
          docs = docs.filter((doc) => {
            const docDate = new Date(doc.date_utc).toISOString();
            return docDate >= start && docDate <= end;
          });
        }

        if (startDate && endDate) {
          const start = new Date(startDate).toISOString();
          const end = new Date(endDate).toISOString();
          docs = docs.filter((doc) => {
            const docDate = new Date(doc.date_utc).toISOString();
            return docDate >= start && docDate <= end;
          });
        }

        setDocuments(docs.length);

        setLaunches(docs);
        setTotalPages(Math.ceil(response.data.totalDocs / amount));
      } catch (error) {
        alert(error.message);
      }
    };

    postData();
  }, [page, amount, skip, search, startDate, endDate]);

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
      <label htmlFor="searchBar"> Search: </label>
      <input
        type="text"
        id="searchBar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <p className={styles.marginBot}>Filter Launches by Date</p>
      <div className={styles.flex}>
        <p>From:</p>
        <DateFilter
          startDate={startDate}
          setStartDate={setStartDate}
          start={true}
        />
        <p>To: </p>
        <DateFilter endDate={endDate} setEndDate={setEndDate} end={true} />
      </div>
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
      <button
        onClick={handleNextPage}
        disabled={page === totalPages || documents < amount}
      >
        Next Page
      </button>
    </div>
  );
}
