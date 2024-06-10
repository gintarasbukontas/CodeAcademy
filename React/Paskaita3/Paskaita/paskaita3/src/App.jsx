import { useState } from "react";
import "./App.css";
import Div2 from "./components/Div2/Div2";
import Div3 from "./components/Div3/Div3";
import Div4 from "./components/Div4/Div4";

function App() {
  const [getNum, setNum] = useState(1);

  function changeName() {
    setNum(getNum + 1);
  }

  return (
    <div>
      <Div2 />

      <Div3 />

      <Div4 />

      <h1>{getNum}</h1>
      <button onClick={changeName}>Add</button>
    </div>
  );
}

export default App;
