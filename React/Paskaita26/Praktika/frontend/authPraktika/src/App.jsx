import { Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterPage from "./controllers/RegisterPage/RegisterPage";
import LoginPage from "./controllers/LoginPage/LoginPage";
import ProtectedPage from "./controllers/ProtectedPage/ProtectedPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/protected" element={<ProtectedPage />} />
      </Routes>
    </div>
  );
}

export default App;
