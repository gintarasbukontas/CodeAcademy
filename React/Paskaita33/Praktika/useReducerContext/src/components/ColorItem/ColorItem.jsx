import {
  ACTION_TYPES,
  useColorContext,
} from "../../context/ColorPalleteProvider/ColorPalleteProvider";

export default function ColorItem({ hexValue, idValue }) {
  const { dispatch } = useColorContext();

  function removeColor() {
    dispatch({
      type: ACTION_TYPES.REMOVE_COLOR,
      payload: idValue,
    });
  }

  function editColor() {
    dispatch({
      type: ACTION_TYPES.EDIT_COLOR,
      payload: { id: idValue, name: "Green", hex: "#2aff00" },
    });
  }

  return (
    <div style={{ display: "flex" }}>
      <p style={{ color: hexValue }}>■</p>
      <button style={{ background: "none" }} onClick={editColor}>
        Edit Color
      </button>
      <button style={{ background: "none" }} onClick={removeColor}>
        Remove Color
      </button>
    </div>
  );
}
