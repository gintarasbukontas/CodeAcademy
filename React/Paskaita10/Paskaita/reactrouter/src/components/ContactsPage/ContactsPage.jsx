import { Link } from "react-router-dom";

export default function ContactsPage() {
  return (
    <div>
      <Link to={"/home"}>Go to home page</Link>
      <h1>Contacts</h1>
      <ul>
        <li>Tel: 1651651</li>
        <li>Email: dasdad@sdassda.ca</li>
        <li>Address: Vilnius</li>
      </ul>
    </div>
  );
}
