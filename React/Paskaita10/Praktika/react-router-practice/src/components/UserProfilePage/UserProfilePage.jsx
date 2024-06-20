import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const API_LINK = "https://jsonplaceholder.typicode.com/users";

export default function UserProfilePage() {
  const [user, setUser] = useState({});

  const params = useParams();

  useEffect(() => {
    axios
      .get(`${API_LINK}/${params.id}`)
      .then((response) => setUser(response.data))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div>
      <>
        <p>{user.name}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.address.city}</p>
        <Link to={"/"}>Home</Link>
      </>
    </div>
  );
}
