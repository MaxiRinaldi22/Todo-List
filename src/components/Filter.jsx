export function Filter({ handleSelectChange, selectedOption }) {
  return (
    <label
      className="container-select"
      value={selectedOption}
      onChange={handleSelectChange}
    >
      <select>
        <option value="all">All</option>
        <option value="completed">Done</option>
        <option value="incomplete">To-do</option>
      </select>
    </label>
  );
}
