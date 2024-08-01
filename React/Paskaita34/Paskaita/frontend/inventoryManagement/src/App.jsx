import { useState } from "react";
import "./App.css";

import ItemList from "./components/ItemList/ItemList";
import ModalAddItem from "./components/ModalAddItem/ModalAddItem";
import ModalUpdateItemById from "./components/ModalUpdateItemById/ModalUpdateItemById";

function App() {
  const [itemsChanged, setItemsChanged] = useState(false);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        <ModalAddItem setItemsChanged={setItemsChanged} />
        <ModalUpdateItemById setItemsChanged={setItemsChanged} />
      </div>
      <ItemList itemsChanged={itemsChanged} setItemsChanged={setItemsChanged} />
    </div>
  );
}

export default App;
