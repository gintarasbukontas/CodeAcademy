import SettingsContextProvider from "./components/Context/SettingsContextProvider";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "App.css";

function App() {
  return (
    <div>
      <SettingsContextProvider>
        <Header />
        <Main />
      </SettingsContextProvider>
    </div>
  );
}

export default App;
