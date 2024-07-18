import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/protected");
    }
  }, [navigate]);

  async function handleLogin(e) {
    e.preventDefault();

    const body = {
      username,
      password,
    };

    try {
      const response = await axios.post(`${API_URL}/login`, body);
      localStorage.setItem("token", response.data.token);
      navigate("/protected");
    } catch (error) {
      alert("Nepavyko prisijungti");
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </form>
    </div>
  );
}
