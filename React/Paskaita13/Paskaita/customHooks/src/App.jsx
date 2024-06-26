// import "./App.css";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import { useWindowDimensions } from "./hooks/useWindowDimensions";

function App() {
  const dimensions = useWindowDimensions();

  return (
    <div>
      <Card title={"Pirma"}>
        <Card.Header text={"Header dalis"} />
        <h4>Lorem ipsum dolor sit amet.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
          accusantium fugit temporibus eligendi rem laboriosam, odit eius sit
          rerum cumque.
        </p>
      </Card>
      <Card title={"Antra"} />
      <Form />
      <p>width: {dimensions.width}</p>
      <p>height: {dimensions.height}</p>
    </div>
  );
}

export default App;
