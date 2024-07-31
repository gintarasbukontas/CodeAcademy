import { ACTION_TYPES, useAppContext } from "../../context/AppContextProvider";

export default function Header() {
  const { dispatch } = useAppContext();

  function handleLogout() {
    dispatch({
      type: ACTION_TYPES.DELETE_USER,
    });
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout User</button>
    </div>
  );
}
