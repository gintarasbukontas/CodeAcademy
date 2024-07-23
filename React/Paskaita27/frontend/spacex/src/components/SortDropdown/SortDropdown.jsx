export default function SortDropdown({ setSort }) {
  return (
    <div>
      <select
        name="LaunchesSort"
        id="LaunchesSort"
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="Date">Date</option>
        <option value="Mission">Mission Name</option>
        <option value="Rocket">Rocket Name</option>
      </select>
    </div>
  );
}
