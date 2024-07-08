import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://glittery-dull-snickerdoodle.glitch.me";

export default function AddLogForm() {
  const [pet_id, setPet_id] = useState();
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  function handleCancelButton() {
    navigate(-1);
  }

  async function onSubmit(e) {
    e.preventDefault();

    const requestBody = {
      pet_id,
      description,
      status,
    };

    if (pet_id && description && status) {
      try {
        const response = await axios.post(`${API_URL}/v1/logs`, requestBody);

        setPet_id("");
        setDescription("");
        setStatus("");

        alert("Log added!");
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
        <label htmlFor="petIdInput">Pet ID</label>
        <br />
        <input
          type="number"
          id="petIdInput"
          value={pet_id}
          onChange={(e) => setPet_id(e.target.value)}
        />
        <br />
        <label htmlFor="descriptionInput">Description</label>
        <br />
        <input
          type="text"
          id="descriptionInput"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label htmlFor="statusInput">Status</label>
        <br />
        <input
          type="text"
          id="statusInput"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
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
