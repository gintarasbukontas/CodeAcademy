import "./App.css";
import About from "./components/About/About";
import Button from "./components/Button/Button";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Button />
      <Header />
      <Contacts />
      <About />
    </div>
  );
}

export default App;
