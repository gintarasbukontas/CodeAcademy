import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_LINK = "https://jsonplaceholder.typicode.com/users";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(API_LINK)
      .then((response) => setUsers(response.data))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <Link to={`/users/${user.id}`}>More info</Link>
          <hr />
        </div>
      ))}
    </div>
  );
}
