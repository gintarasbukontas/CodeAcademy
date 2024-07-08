import axios from "axios";
import styles from "./PetList.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_LINK = "https://glittery-dull-snickerdoodle.glitch.me";

export default function PetList() {
  const [pets, setPets] = useState([]);
  const [petsChanged, setPetsChanged] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_LINK}/v1/pets`)
      .then((response) => {
        setPets(response.data);
        console.log(response.data);
      })
      .catch((error) => alert(error.message));
    setPetsChanged(false);
  }, [petsChanged]);

  function handleAddPetButton() {
    navigate("/add-pet");
  }

  function handleViewLogButton(e) {
    const id = e.target.value;
    navigate(`/view-log/${id}`);
  }

  function handleDeleteButton(e) {
    const id = e.target.value;
    axios.delete(`${API_LINK}/v1/pets/${id}`);
    setPetsChanged(true);
  }

  return (
    <div>
      <div className={styles.flex}>
        <h1>Pet List</h1>
        <button className="button-orange" onClick={handleAddPetButton}>
          ADD PET
        </button>
      </div>
      <div className={styles.grid}>
        {pets.map((pet) => (
          <div key={pet.id} className={styles.card}>
            <h2>{pet.name}</h2>
            <p>{pet.dob}</p>
            <p>{pet.client_email}</p>
            <button
              className="button-orange"
              value={pet.id}
              onClick={handleViewLogButton}
            >
              VIEW LOG
            </button>
            <button
              className="button-white"
              value={pet.id}
              onClick={handleDeleteButton}
            >
              DELETE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
