import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";

function App() {
  const name = "sdasfsf";

  function handleClick() {
    console.log("Labas is react");
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleClick}>Click me</button>
      <Header />
      <Body />
    </div>
  );
}

export default App;
