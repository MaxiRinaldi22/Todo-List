export function Filter({ handleSelectChange, selectedOption }) {
  return (
    <label
      className="container-select"
      value={selectedOption}
      onChange={handleSelectChange}
    >
      <select>
        <option value="all">All</option>
        <option value="completed">Complete</option>
        <option value="incomplete">Pending</option>
      </select>
    </label>
  );
}
