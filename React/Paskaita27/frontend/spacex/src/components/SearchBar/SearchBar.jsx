import styles from "./SearchBar.module.css";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className={styles.margin}>
      <label htmlFor="searchBar">Search: </label>
      <input
        type="text"
        id="searchBar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
