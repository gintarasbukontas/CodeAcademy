import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import BooksPage from "./components/BooksPage/BooksPage";
import BookPage from "./components/BookPage/BookPage";
import AddBookPage from "./components/AddBookPage/AddBookPage";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<h1>Welcome to this Books Collection Page!</h1>}
        />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/api/books/:id" element={<BookPage />} />
        <Route path="/add-book" element={<AddBookPage />} />
      </Routes>
    </div>
  );
}

export default App;
