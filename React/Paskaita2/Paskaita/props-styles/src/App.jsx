import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  function handleClickButton1() {
    console.log("Button1 clicked");
  }

  function handleClickButtonOther() {
    console.log("Paspaustas ne pirmas mygtukas");
  }

  return (
    <div>
      <Button text={"mygtukas 1"} onClick={handleClickButton1} />
      <Button text={"mygtukas 2"} onClick={handleClickButtonOther} />
      <Button text={"mygtukas 3"} onClick={handleClickButtonOther} />
      <Input
        id={"pirmasInputas"}
        label={"Name"}
        type={"number"}
        bigFont={true}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <Input
        id={"date"}
        label={"Data"}
        type={"date"}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
