import { useState } from "react";
import {
  ACTION_TYPES,
  useColorContext,
} from "../../context/ColorPalleteProvider/ColorPalleteProvider";

export default function AddColorForm() {
  const { dispatch } = useColorContext();

  const [colorId, setColorId] = useState("");
  const [colorName, setColorName] = useState("");
  const [colorHex, setColorHex] = useState("");

  function addColor(e) {
    e.preventDefault();
    dispatch({
      type: ACTION_TYPES.ADD_COLOR,
      payload: { id: colorId, name: colorName, hex: colorHex },
    });
  }

  return (
    <div>
      <form onSubmit={addColor}>
        <input
          id="idValue"
          type="text"
          placeholder="ID"
          value={colorId}
          onChange={(e) => setColorId(e.target.value)}
        />
        <br />
        <input
          id="nameValue"
          type="text"
          placeholder="Name"
          value={colorName}
          onChange={(e) => setColorName(e.target.value)}
        />
        <br />
        <input
          id="hexValue"
          type="text"
          placeholder="Hex"
          value={colorHex}
          onChange={(e) => setColorHex(e.target.value)}
        />
        <br />
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
}
