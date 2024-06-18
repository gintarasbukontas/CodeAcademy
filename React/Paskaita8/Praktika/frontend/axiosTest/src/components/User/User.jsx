import styles from "./User.module.css";

export default function User({ user }) {
  return (
    <div className={styles.card}>
      <h3>Name: {user.name}</h3>
      <h4>Username: {user.username}</h4>
      <h5>Email: {user.email}</h5>
    </div>
  );
}
