import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/launches")}>Launch List</button>
      <button onClick={() => navigate("/launchesPagination")}>
        Launch List Pagination
      </button>
    </div>
  );
}
