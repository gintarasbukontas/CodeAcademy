import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import LaunchListPage from "./components/LaunchListPage/LaunchListPage";
import Header from "./components/Header/Header";
import LaunchDetailsPage from "./components/LaunchDetailsPage/LaunchDetailsPage";
import LaunchItemPagination from "./components/LaunchItemPagination/LaunchItemPagination";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/launches" element={<LaunchListPage />} />
        <Route path="/launch/:id" element={<LaunchDetailsPage />} />
        <Route path="/launchesPagination" element={<LaunchItemPagination />} />
      </Routes>
    </div>
  );
}

export default App;
