import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerSuccessful, setRegisterSuccessful] = useState(false);

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    const body = {
      username,
      password,
    };

    try {
      await axios.post(`${API_URL}/register`, body);
      setRegisterSuccessful(true);

      setTimeout(() => navigate("/login"), 3000);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </form>
      {registerSuccessful && <p>Registration successful!</p>}
    </div>
  );
}
