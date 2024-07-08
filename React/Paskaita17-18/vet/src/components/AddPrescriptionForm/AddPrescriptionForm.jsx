import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://glittery-dull-snickerdoodle.glitch.me";

export default function AddPrescriptionForm() {
  const [pet_id, setPet_id] = useState();
  const [medication_id, setMedication_id] = useState();
  const [comment, setComment] = useState("");

  const navigate = useNavigate();

  function handleCancelButton() {
    navigate(-1);
  }

  async function onSubmit(e) {
    e.preventDefault();

    const requestBody = {
      pet_id,
      medication_id,
      comment,
    };

    if (pet_id && medication_id && comment) {
      try {
        const response = await axios.post(
          `${API_URL}/v1/prescriptions`,
          requestBody
        );

        setPet_id("");
        setMedication_id("");
        setComment("");

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
        <label htmlFor="medicationIdInput">Medication ID</label>
        <br />
        <input
          type="number"
          id="medicationIdInput"
          value={medication_id}
          onChange={(e) => setMedication_id(e.target.value)}
        />
        <br />
        <label htmlFor="commentInput">Comment</label>
        <br />
        <input
          type="text"
          id="commentInput"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
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
