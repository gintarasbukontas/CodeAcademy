import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://glittery-dull-snickerdoodle.glitch.me";

export default function AddPetForm() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [client_email, setClient_email] = useState("");

  const navigate = useNavigate();

  function handleCancelButton() {
    navigate(-1);
  }

  async function onSubmit(e) {
    e.preventDefault();

    const requestBody = {
      name,
      dob,
      client_email,
    };

    if (name && dob && client_email) {
      try {
        const response = await axios.post(`${API_URL}/v1/pets`, requestBody);

        setName("");
        setDob("");
        setClient_email("");

        alert("Pet added!");
        console.log(response.data);
      } catch (error) {
        alert("Something went wrong");
        console.log(error.message);
      }
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="nameInput">Pet Name</label>
        <br />
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="dobInput">Date of Birth</label>
        <br />
        <input
          type="text"
          id="dobInput"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <br />
        <label htmlFor="emailInput">Email</label>
        <br />
        <input
          type="text"
          id="emailInput"
          value={client_email}
          onChange={(e) => setClient_email(e.target.value)}
        />
        <br />
        <button className="button-orange" type="submit">
          Submit
        </button>
        <button className="button-white" onClick={handleCancelButton}>
          Cancel
        </button>
      </form>
    </div>
  );
}
