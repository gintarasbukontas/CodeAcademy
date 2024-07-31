import { useColorContext } from "../../context/ColorPalleteProvider/ColorPalleteProvider";
import ColorItem from "../ColorItem/ColorItem";

export default function ColorList() {
  const { state } = useColorContext();
  return (
    <div>
      <h3>Available Colors</h3>
      {state.palette.map((color) => (
        <div key={color.id} style={{ display: "flex", alignItems: "center" }}>
          {console.log(color)}
          <p>{color.name}</p>
          <ColorItem hexValue={color.hex} idValue={color.id} />
        </div>
      ))}
    </div>
  );
}
