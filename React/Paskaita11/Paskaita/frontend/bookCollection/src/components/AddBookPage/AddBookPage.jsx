import { useState } from "react";
import axios from "axios";
import styles from "./AddBookPage.module.css";

export default function AddBookPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [summary, setSummary] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  async function onSubmit(e) {
    e.preventDefault();

    const requestBody = {
      title,
      author,
      genre,
      publishedYear,
      summary,
    };

    try {
      const response = await axios.post(`${API_URL}/api/books`, requestBody);

      setTitle("");
      setAuthor("");
      setGenre("");
      setPublishedYear("");
      setSummary("");
      alert("Knyga pridėta!");
      console.log(response.data);
    } catch (error) {
      alert("Kazkas nepavyko");
      console.log(error.message);
    }
  }

  return (
    <div className={styles}>
      <form onSubmit={onSubmit}>
        <label htmlFor="titleInput">Title</label>
        <br />
        <input
          type="text"
          id="titleInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="authorInput">Author</label>
        <br />
        <input
          type="text"
          id="authorInput"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <label htmlFor="genreInput">Genre</label>
        <br />
        <input
          type="text"
          id="genreInput"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <br />
        <label htmlFor="yearInput">Published Year</label>
        <br />
        <input
          type="number"
          id="yearInput"
          value={publishedYear}
          onChange={(e) => setPublishedYear(e.target.value)}
        />
        <br />
        <label htmlFor="summaryInput">Summary</label>
        <br />
        <input
          type="text"
          id="summaryInput"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
