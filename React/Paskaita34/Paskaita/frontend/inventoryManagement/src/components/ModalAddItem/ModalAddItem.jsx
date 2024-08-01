import axios from "axios";
import { useEffect, useState } from "react";
import style from "./ModalAddItem.module.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function ModalAddItem({ setItemsChanged }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const requestBody = {
      name,
      quantity,
      price,
    };

    try {
      const response = await axios.post(`${API_URL}/items`, requestBody);

      setName("");
      setQuantity("");
      setPrice("");

      alert("Item added!");
      console.log(response.data);
      setIsModalOpen(!isModalOpen);
    } catch (error) {
      alert("Something went wrong");
      console.log(error.message);
    }
    setItemsChanged(true);
  }

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <div>
      <button onClick={toggleModal}>Add Item</button>

      {isModalOpen && (
        <div className={style.modal}>
          <div className={style.overlay} onClick={toggleModal}></div>
          <div className={style.modalContent}>
            <h3>Add New Item</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="inputName">Item Name</label>
              <br />
              <input
                id="inputName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <label htmlFor="inputQuantity">Quantity</label>
              <br />
              <input
                id="inputQuantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <br />
              <label htmlFor="inputPrice">Price</label>
              <br />
              <input
                id="inputPrice"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <br />
              <button type="submit">Add</button>
              <button onClick={toggleModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
