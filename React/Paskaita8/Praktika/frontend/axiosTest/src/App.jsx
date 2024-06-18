import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UsersContainer from "./components/UsersContainer/UsersContainer";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/user")
      .then((response) => {
        setUsers(response.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <UsersContainer users={users} />
    </div>
  );
}

export default App;
