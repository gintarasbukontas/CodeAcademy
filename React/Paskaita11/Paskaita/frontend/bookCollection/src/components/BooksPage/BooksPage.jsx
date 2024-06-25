import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BooksPage.module.css";

const API_LINK = "http://127.0.0.1:4000/api/books";

export default function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(API_LINK)
      .then((response) => setBooks(response.data))
      .catch((error) => alert(error.message));
  }, []);

  return (
    <div className={styles.grid}>
      {books.map((book) => (
        <div className={styles.card} key={book._id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <Link to={`/api/books/${book._id}`}>More Info</Link>
        </div>
      ))}
    </div>
  );
}
