import { useState } from "react";
import { ACTION_TYPES, useAppContext } from "../../context/AppContextProvider";

export default function ItemsContainer() {
  const { state, dispatch } = useAppContext();

  const [itemValue, setItemValue] = useState("");

  return (
    <div>
      <br />
      <input
        type="text"
        value={itemValue}
        onChange={(e) => setItemValue(e.target.value)}
        placeholder="Item"
      />
      <button
        onClick={() =>
          dispatch({ type: ACTION_TYPES.ADD_ITEM, payload: itemValue })
        }
      >
        Create new item
      </button>
      {state.items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}
