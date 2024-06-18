import User from "../User/User";

export default function UsersContainer({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User key={user._id} user={user} />
      ))}
    </div>
  );
}
