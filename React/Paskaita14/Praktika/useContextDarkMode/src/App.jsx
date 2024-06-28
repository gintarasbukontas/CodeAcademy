import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";
import { useSettingsContext } from "./components/Context/SettingsContextProdiver";

function App() {
  const { dark } = useSettingsContext();

  return (
    <div className={dark}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
