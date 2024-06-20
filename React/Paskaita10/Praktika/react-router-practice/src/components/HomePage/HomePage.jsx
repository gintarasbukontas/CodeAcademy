import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h3>Welcome to Home Page</h3>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/contact"}>Contact</Link>
      <br />
      <Link to={"/users"}>Users</Link>
    </div>
  );
}
