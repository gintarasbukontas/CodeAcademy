import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./BookPage.module.css";

const API_LINK = "http://127.0.0.1:4000/api/books";

export default function BookPage() {
  const [book, setBook] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_LINK}/${params.id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => alert(error.message));
  }, []);

  function handleBackButton() {
    navigate(-1);
  }

  return (
    <div className={styles.margin}>
      {book._id ? (
        <>
          <h2>{book.title}</h2>
          <p>
            Author: <span className={styles.orange}> {book.author}</span>
          </p>
          <p>
            Genre: <span className={styles.orange}> {book.genre}</span>
          </p>
          <p>
            Published:{" "}
            <span className={styles.orange}> {book.publishedYear}</span>
          </p>
          <p>{book.summary}</p>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
      <button onClick={handleBackButton}>Go back</button>
    </div>
  );
}
