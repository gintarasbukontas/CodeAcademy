import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function ItemList({ itemsChanged, setItemsChanged }) {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    axios
      .get(`${API_URL}/items/${order}`)
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error.message));
    setItemsChanged(false);
  }, [itemsChanged, setItemsChanged, order]);

  function deleteItem(e) {
    const id = e.target.value;
    axios.delete(`${API_URL}/items/${id}`);
    setItemsChanged(true);
  }

  return (
    <div>
      <h3>Items</h3>
      <label htmlFor="sortSelect">Sort By: </label>
      <select
        name="sortSelect"
        id="sortSelect"
        onChange={(e) => setOrder(e.target.value)}
      >
        <option value="asc">Name [A-Z]</option>
        <option value="desc">Name [Z-A]</option>
        <option value="lowestQuantity">Lowest Quantity</option>
        <option value="highestQuantity">Highest Quantity</option>
        <option value="lowestPrice">Lowest Price</option>
        <option value="highestPrice">Highest Price</option>
      </select>
      {items.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid black",
            padding: "20px",
            margin: "20px",
            width: "300px",
          }}
        >
          <h2>{item.name}</h2>
          <p>ID: {item._id}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>
          <button value={item._id} onClick={deleteItem}>
            Delete from DB
          </button>
        </div>
      ))}
    </div>
  );
}
