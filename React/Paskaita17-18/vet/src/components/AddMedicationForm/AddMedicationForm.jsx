import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://glittery-dull-snickerdoodle.glitch.me";

export default function AddMedicationForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleCancelButton() {
    navigate(-1);
  }

  async function onSubmit(e) {
    e.preventDefault();

    const requestBody = {
      name,
      description,
    };

    if (name && description) {
      try {
        const response = await axios.post(`${API_URL}/v1/meds`, requestBody);

        setName("");
        setDescription("");

        alert("Medication added!");
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
        <label htmlFor="nameInput">Title</label>
        <br />
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
